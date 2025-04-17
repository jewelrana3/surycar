import { useEffect, useRef, useState } from 'react';
import JoditEditor from 'jodit-react';
import Button from '../../components/shared/Button';
import { useCreatePrivacyMutation, useGetPrivacyQuery } from '../../redux/rule/Privacy';

export default function PrivacyPolicy() {
    const { data, isError, isLoading } = useGetPrivacyQuery(undefined);
    const [createPrivacy] = useCreatePrivacyMutation();

    const editor = useRef(null);
    const [content, setContent] = useState('');

    useEffect(() => {
        if (data?.data?.content) {
            setContent(data?.data?.content);
        }
    }, [data]);

    const handleOnSave = async (value: string) => {
        console.log(value);
        await createPrivacy({ content: value });
    };

    if (isLoading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (isError) {
        return <div className="flex justify-center items-center h-screen">data not found...</div>;
    }

    return (
        <div className="bg-white">
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
