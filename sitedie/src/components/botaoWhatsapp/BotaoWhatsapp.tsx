interface BotaoWhatsappProps {
  mensagem?: string;
  children?: React.ReactNode;
  className?: string;
}

export function BotaoWhatsapp({
  mensagem,
  children,
  className,
}: BotaoWhatsappProps) {
  const url = mensagem
    ? `https://wa.me/5511999999999?text=${encodeURIComponent(mensagem)}`
    : "https://wa.me/5511999999999";
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
