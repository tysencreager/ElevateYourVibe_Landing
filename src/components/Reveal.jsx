import { useInView } from '../hooks/useInView.js';

/**
 * A tiny wrapper that fades + slides its children into view when scrolled
 * into the viewport. Respects prefers-reduced-motion (handled in CSS).
 *
 * Props:
 *   as         - element type (defaults to 'div')
 *   direction  - 'up' (default) | 'down' | 'left' | 'right' | 'zoom'
 *   delay      - ms before the animation starts
 *   duration   - ms animation duration (defaults to 700)
 *   once       - only animate the first time (default true)
 */
export default function Reveal({
  as: Tag = 'div',
  direction = 'up',
  delay = 0,
  duration = 700,
  once = true,
  className = '',
  style = {},
  children,
  ...rest
}) {
  const [ref, inView] = useInView({ once });

  const hidden = {
    up: 'translate3d(0, 24px, 0)',
    down: 'translate3d(0, -24px, 0)',
    left: 'translate3d(24px, 0, 0)',
    right: 'translate3d(-24px, 0, 0)',
    zoom: 'scale(0.96)',
  }[direction];

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translate3d(0, 0, 0) scale(1)' : hidden,
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
