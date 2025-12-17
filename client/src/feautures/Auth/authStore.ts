import { makeAutoObservable } from "mobx";
import { httpPost } from "../../shared/api/httpClient";
const AUTH_STORAGE_KEY = 'travel_app_auth';

interface AuthUser {
  id: number;
  email: string;
}

interface LoginResponse {
  user: AuthUser;
  accessToken: string;
}

export class AuthStore {
  user: AuthUser | null = null;
  accessToken: string | null = null;
  loading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
    if (typeof window !== "undefined") {
      const raw = localStorage.getItem(AUTH_STORAGE_KEY);
      if (raw) {
        try {
          const parsed = JSON.parse(raw) as {
            user: AuthUser;
            accessToken: string;
          };
          this.user = parsed.user;
          this.accessToken = parsed.accessToken;
        } catch {
          localStorage.removeItem(AUTH_STORAGE_KEY);
        }
      }
    }
  }

  private saveToStorage() {
    if (typeof window === 'undefined') return;
    if (!this.user || !this.accessToken) {
      localStorage.removeItem(AUTH_STORAGE_KEY);
      return;
    }
    localStorage.setItem(
      AUTH_STORAGE_KEY,
      JSON.stringify({ user: this.user, accessToken: this.accessToken }),
    );
  }

  async register(email: string, password: string) {
    this.loading = true;
    this.error = null;
    try {
      await httpPost<
        { id: number; email: string },
        { email: string; password: string }
      >("/auth/register", { email, password });
      // после регистрации можно сразу логинить, но пока просто считаем успехом
    } catch (e: any) {
      this.error = e.message ?? "Register failed";
    } finally {
      this.loading = false;
    }
  }

  async login(email: string, password: string) {
    this.loading = true;
    this.error = null;
    try {
      const res = await httpPost<LoginResponse, { email: string; password: string }>(
        "/auth/login",
        { email, password },
      );
      this.user = res.user;
      this.accessToken = res.accessToken;
      this.saveToStorage();              // ← СЮДА нужен вызов
    } catch (e: any) {
      this.error = e.message ?? "Login failed";
    } finally {
      this.loading = false;
    }
  }

  logout() {
    this.user = null;
    this.accessToken = null;
  }
}
