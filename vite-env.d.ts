// vite-env.d.ts

/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_WEB3FORMS_ACCESS_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
