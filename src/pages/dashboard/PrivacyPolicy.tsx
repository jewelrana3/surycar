import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useRef, useState } from 'react';
import JoditEditor from 'jodit-react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/shared/Button';

export default function PrivacyPolicy() {
    const editor = useRef(null);
    const navigate = useNavigate();

    const [content, setContent] = useState('');

    const handleOnSave = (value: string) => {
        console.log(value);
    };
    return (
        <div className="bg-white">
            <div
                className="flex items-center gap-4 font-semibold text-[20px] text-textGray my-5"
                onClick={() => navigate(-1)}
            >
                <button className="text-xl">
                    <MdOutlineArrowBackIosNew />
                </button>
                <button>Privacy & Policy</button>
            </div>

            <div className="">
                <div className="">
                    <JoditEditor
                        ref={editor}
                        value={content}
                        config={{ height: 550, theme: 'light', readonly: false }}
                        onBlur={(newContent) => setContent(newContent)}
                    />
                </div>
                <Button onClick={() => handleOnSave(content)} className="mt-5 w-[10%]">
                    Save & Change
                </Button>
            </div>
        </div>
    );
}
