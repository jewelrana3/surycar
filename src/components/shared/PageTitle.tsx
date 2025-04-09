export default function PageTitle({ children, className }: { children: string; className?: string }) {
    return <div className={`text-[22px] font-medium ${className}`}>{children}</div>;
}
