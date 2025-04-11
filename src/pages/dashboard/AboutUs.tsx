import { useRef, useState } from 'react';
import JoditEditor from 'jodit-react';

import Button from '../../components/shared/Button';

export default function AboutUS() {
    const editor = useRef(null);

    const [content, setContent] = useState('');

    const handleOnSave = (value: string) => {
        console.log(value);
    };
    return (
        <div className="bg-white">
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
    );
}
