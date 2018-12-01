import '../styles/Icons.css';

export const icons = {
    fb: 'facebook',
    ln: 'linkedin',
    gh: 'github',
    e: 'mail'
};
const ic = 'icon';
const Icon = ({name, link = "#"}) => (
    <a href={link}>
        <i role="button" className={`${ic} ${name}`} />
    </a>
);

export default Icon;