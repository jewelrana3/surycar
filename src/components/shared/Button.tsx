interface ButtonProps {
    children: React.ReactNode;
    className: string;
    onClick?: () => void;
    htmlType?: 'button' | 'submit' | 'reset';
}

export default function Button({ children, className, onClick, htmlType = 'button' }: ButtonProps) {
    return (
        <div className="flex justify-end p-2">
            <button
                type={htmlType}
                onClick={onClick} // Passing the onClick handler here
                className={`${className} text-white text-center my-auto cursor-pointer bg-[#188A50] w-[180px] h-[45px] rounded-full text-base font-poppins `}
            >
                {children}
            </button>
        </div>
    );
}
