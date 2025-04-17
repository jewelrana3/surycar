import { useEffect, useRef, useState } from 'react';
import JoditEditor from 'jodit-react';
import Button from '../../components/shared/Button';
import { useCreateTermsConditionMutation, useGetTermsConditionQuery } from '../../redux/rule/termsCondition';
export default function TermsCondition() {
    const { data, isError, isLoading } = useGetTermsConditionQuery(undefined);
    const [createTermsCondition] = useCreateTermsConditionMutation();
    const editor = useRef(null);
    const [content, setContent] = useState('');

    useEffect(() => {
        if (data?.data?.content) {
            setContent(data?.data?.content);
        }
    }, [data]);

    const handleOnSave = async (value: string) => {
        console.log(value);
        await createTermsCondition({ content: value });
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
