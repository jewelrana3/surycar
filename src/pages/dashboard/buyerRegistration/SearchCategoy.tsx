import { DatePicker, Input } from 'antd';
import { GoLock, GoUnlock } from 'react-icons/go';
import { FaSearch } from 'react-icons/fa';
import { jsPDF } from 'jspdf';
import { autoTable } from 'jspdf-autotable';
import dayjs from 'dayjs';

// Extending the jsPDF class to include the autoTable method
declare module 'jspdf' {
    interface jsPDF {
        autoTable: any;
    }
}

// Define the data type interface for the table
interface DataType {
    vehicle: {
        brand: string;
    };
    email: string;
    createdAt: string;
    user: {
        firstName: string;
    };
    model: string;
    contact: string;
}

const dateFormat = 'YYYY-MM-DD';

interface SearchCategoryProps {
    data?: DataType[]; // data prop should be an array of DataType
}

export default function SearchCategory({ data }: SearchCategoryProps) {
    console.log(data);
    // const buyerData = data?.data;
    const generatePDF = () => {
        const doc = new jsPDF();

        doc.setFontSize(16);
        doc.text('Customer List Report', 20, 20);

        const headers = [['Name', 'Email', 'Contact', 'Brand', 'Date']];

        const rows = data?.map((item) => [
            item?.user?.firstName,
            item?.email,
            item.contact,
            item.vehicle.brand,
            item.createdAt?.slice(0, 10),
        ]);

        autoTable(doc, {
            head: headers,
            body: rows,
            startY: 30,
        });

        // Save the generated PDF
        doc.save('customer_report.pdf');
    };

    return (
        <div className="flex justify-end">
            <div className="flex items-center p-4 rounded-lg space-x-2">
                <div className="flex space-x-4 mr-4">
                    <button className="" onClick={generatePDF}>
                        <img src="/customer/pdf.svg" alt="pdf" />
                    </button>
                    <button className="">
                        <img src="/customer/xcel.svg" alt="xcel" />
                    </button>
                    <button className="">
                        <GoUnlock size={28} className="text-textGray" />
                    </button>
                    <button className="">
                        <GoLock size={28} className="text-textGray" />
                    </button>
                </div>
                <div className="flex items-center space-x-2">
                    <Input
                        type="text"
                        placeholder="Search here"
                        className="px-2  w-80 rounded-full shadow-black"
                        prefix={<FaSearch size={13} className="bg-[#B7DBC9] text-[#58553A] rounded-full w-9 h-9 p-2" />}
                    />
                </div>

                <div>
                    <DatePicker
                        className="w-32 h-10"
                        minDate={dayjs('2019-08-01', dateFormat)}
                        maxDate={dayjs('2020-10-31', dateFormat)}
                    />
                </div>
            </div>
        </div>
    );
}
