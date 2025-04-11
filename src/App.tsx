import MainLayout from './components/layout/MainLayout';
import { ConfigProvider } from 'antd';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import global styles
function App() {
    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#FBB040',
                    },
                    components: {
                        Input: {
                            borderRadius: 40,
                        },
                        Table: {
                            headerColor: '#5C5C5C',
                            headerBg: '',
                            colorBgContainer: '#F9F9F9 ',
                            colorText: '#767676',
                            headerSplitColor: '#929292',
                            borderColor: '#F9F9F9',
                            padding: 6,

                            fontFamily: 'Poppins',
                        },
                        Select: {
                            colorBgContainer: '#F4F4F4',
                            hoverBorderColor: '',
                            activeBorderColor: '',
                        },
                    },
                }}
            >
                <MainLayout />
            </ConfigProvider>
            <ToastContainer position="top-right" />
        </>
    );
}

export default App;
