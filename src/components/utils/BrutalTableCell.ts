import type { VNodeChild } from 'vue';

// Uma função pura que atua como um Componente Funcional no Vue 3
export default function BrutalTableCell<T>(props: {
  renderFn: (row: T) => VNodeChild;
  row: T;
}) {
  return props.renderFn(props.row);
}
