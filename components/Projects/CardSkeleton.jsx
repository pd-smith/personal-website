import React from 'react';

export default function CardSkeleton() {
    return (
        <div className="bg-white w-full sm:w-1/2 md:w-1/3 max-w-sm rounded overflow-hidden shadow-lg box-border m-1">
            <div className="px-6 py-4">
                <span className="skeleton-box h-6 w-4/5 inline-block mt-1 mb-2" />
                <p>
                    <span className="skeleton-box h-4 w-full inline-block" />
                    <span className="skeleton-box h-4 w-full inline-block" />
                    <span className="skeleton-box h-4 w-full inline-block" />
                    <span className="skeleton-box h-4 w-3/5 inline-block" />
                </p>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block skeleton-box rounded-full px-3 py-1 mr-2 h-5 w-1/5"></span>
                <span className="inline-block skeleton-box rounded-full px-3 py-1 mr-2 h-5 w-1/5"></span>
                <span className="inline-block skeleton-box rounded-full px-3 py-1 mr-2 h-5 w-1/5"></span>
            </div>
        </div>
    );
}
