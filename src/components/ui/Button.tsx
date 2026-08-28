interface ButtonProps {
    text: string;
    onClick: () => void;
    variant: "primary" | "secondary" | "danger";
    disabled?: boolean;
}

export default function Button({
    text, onClick, variant, disabled, }: ButtonProps) {
    const variantStyles = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
        danger: "bg-red-600 text-white hover:bg-red-700",
    };
    return (
        <button onClick={onClick} disabled={disabled} className={`px-4 py-2 rounded-md ${variantStyles[variant]}`}>
            {text}
        </button>
    );
}