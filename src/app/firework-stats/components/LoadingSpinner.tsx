export const LoadingSpinner = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-8 font-sans antialiased w-full flex items-center justify-center">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4" />
                <div className="text-xl text-gray-600">
                    Loading sales data...
                </div>
            </div>
        </div>
    );
};
