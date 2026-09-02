import css from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={css.footer}>
            <div className={css.content}>
                <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
                <div className={css.wrap}>
                    <p>Developer: Olena Solonikova</p>
                    <p>
                        Contact us:
                        <a href="mailto:olena_solonikova@iclaud.com"> olena_solonikova@iclaud.com</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
