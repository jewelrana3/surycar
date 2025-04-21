import { useEffect, useRef, useState } from 'react';
import JoditEditor from 'jodit-react';

import Button from '../../components/shared/Button';
import { useCreateWorkMutation, useGetWorkQuery } from '../../redux/rule/work';

export default function WorkFunction() {
    const { data, isLoading, isError } = useGetWorkQuery(undefined);
    const [createWork] = useCreateWorkMutation();
    const editor = useRef(null);
    const [content, setContent] = useState('');

    useEffect(() => {
        if (data?.data?.content) {
            setContent(data?.data?.content);
        }
    }, [data]);

    const handleOnSave = async (value: string) => {
        console.log(value);
        await createWork({ content: value });
    };

    if (isLoading) {
        return <span>Loading...</span>;
    }
    if (isError) {
        return <span>data not found</span>;
    }
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
