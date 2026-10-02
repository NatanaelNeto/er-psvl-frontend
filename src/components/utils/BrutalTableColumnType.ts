import type { VNodeChild } from "vue";

export interface BrutalTableColumn<T> {
  title: string;
  key: keyof T | string; // string para chaves virtuais usadas apenas no render
  width?: string | number;
  render?: (row: T) => VNodeChild;
}
