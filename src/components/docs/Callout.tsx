import { AlertCircle, AlertTriangle, Info, Lightbulb } from 'lucide-react';

interface CalloutProps {
  type?: 'info' | 'warning' | 'danger' | 'tip';
  children: React.ReactNode;
  light?: boolean;
}

export default function Callout({ type = 'info', children, light = false }: CalloutProps) {
  const config = {
    info: {
      icon: Info,
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/30',
      text: 'text-blue-400',
    },
    warning: {
      icon: AlertTriangle,
      bg: 'bg-yellow-500/10',
      border: 'border-yellow-500/30',
      text: 'text-yellow-400',
    },
    danger: {
      icon: AlertCircle,
      bg: 'bg-red-500/10',
      border: 'border-red-500/30',
      text: 'text-red-400',
    },
    tip: {
      icon: Lightbulb,
      bg: 'bg-green-500/10',
      border: 'border-green-500/30',
      text: 'text-green-400',
    },
  };

  const { icon: Icon, bg, border, text } = config[type];

  return (
    <div className={`${bg} ${border} border rounded-lg p-4 my-4 flex gap-3`}>
      <Icon className={`w-5 h-5 ${text} flex-shrink-0 mt-0.5`} />
      <div className={`text-sm leading-relaxed ${light ? 'text-gray-700' : 'text-gray-300'}`}>{children}</div>
    </div>
  );
}
