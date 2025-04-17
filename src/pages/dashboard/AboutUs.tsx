import { useEffect, useRef, useState } from 'react';
import JoditEditor from 'jodit-react';

import Button from '../../components/shared/Button';
import { useCreateAboutMutation, useGetAboutQuery } from '../../redux/rule/about';

export default function AboutUS() {
    const { data, isError, isLoading } = useGetAboutQuery(undefined);
    const [createAbout] = useCreateAboutMutation();
    const editor = useRef(null);

    const [content, setContent] = useState('');

    const handleOnSave = async (value: string) => {
        console.log(value);
        await createAbout({ content: value }).then((res) => {
            console.log(res);
        });
    };

    useEffect(() => {
        if (data?.data?.content) {
            setContent(data?.data?.content);
        }
    }, [data]);

    if (isLoading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (isError) {
        return <div className="flex justify-center items-center h-screen">data not found...</div>;
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
