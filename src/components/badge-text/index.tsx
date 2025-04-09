type BadgeTextProps = {
    Icon: React.ElementType;
    children: React.ReactNode;
};

function BadgeText({ Icon, children }: BadgeTextProps) {
    return (
        <div className="text-base flex">
            <Icon className="size-6 text-blue-300 mr-2" />
            {children}
        </div>
    )
}

export default BadgeText