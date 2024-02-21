const ROUTES = [
    {
        title: 'Home',
        url: '/home',
    },
    {
        title: 'About',
        url: '/about',
    },
    {
        title: 'Skill',
        url: '/skill',
    },
    {
        title: 'Tools',
        url: '/tools',
    },
]

export const PianoSidebar = () => {
    return (
        <div className="top-150 fixed left-0">
            {ROUTES.map(({ title }) => (
                <div className="white-piano-key">{title}</div>
            ))}
        </div>
    )
}
