type SectionItem = {
    title?: string;
    description: string;
};

type SectionItemListProps = {
    items: SectionItem[];
    numbered?: boolean;
};

export default function SectionItemList({ items, numbered = false }: SectionItemListProps) {
    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <div key={`${item.title ?? item.description}-${index}`} className="flex items-start gap-4">
                    <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                        {numbered ? index + 1 : '→'}
                    </div>
                    <div className="min-w-0">
                        {item.title ? <p className="text-sm font-semibold text-white">{item.title}</p> : null}
                        <p className="text-sm leading-7 text-slate-300">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
