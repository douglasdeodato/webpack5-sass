
import './sass-test.scss';

class SassTest {
    render(pageName) {
        const h1 = document.createElement('h1');
        const body = document.querySelector('body');
        h1.innerHTML = 'this h1 heading it is from thge page: "' + pageName + '"page';
        body.appendChild(h1);
    }
}

export default SassTest;
