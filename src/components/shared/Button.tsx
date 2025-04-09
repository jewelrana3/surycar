interface ButtonProps {
    children: React.ReactNode;
    className: string;
    onClick?: () => void;
    htmlType?: 'button' | 'submit' | 'reset';
}

export default function Button({ children, className, onClick, htmlType = 'button' }: ButtonProps) {
    return (
        <button
            type={htmlType}
            onClick={onClick} // Passing the onClick handler here
            className={`${className} font-medium text-center my-auto cursor-pointer bg-bgGolden w-[180px] h-[45px] rounded-xl text-base font-poppins`}
        >
            {children}
        </button>
    );
}
