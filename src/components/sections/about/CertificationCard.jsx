export default function CertificationCard({ title, issuer, link }) {
    return (
        <div className="max-w-sm p-6 bg-white border rounded-lg shadow-xs border-zinc-200 dark:bg-zinc-800 dark:border-zinc-700">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">{title}</h5>
            <p className="mb-3 font-normal text-zinc-500 dark:text-zinc-400">{issuer}</p>
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center font-medium text-blue-600 hover:underline"
            >
                See certificate
                <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" viewBox="0 0 18 18" fill="none">
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                </svg>
            </a>
        </div>
    );
}
