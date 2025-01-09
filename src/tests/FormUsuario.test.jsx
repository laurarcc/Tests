import { render, screen } from "@testing-library/react";
import FormUsuario from "../components/FormUsuario.jsx";
import userEvent from "@testing-library/user-event";

describe('FormUsuario componente', () => {
    let button;
    let header;
    let txt;
    beforeEach(() => {
       render(<FormUsuario />);
       button = screen.getByRole('button', {name : 'Submit'});
       header = screen.getByRole('heading', {level : 2});
       txt = screen.getByLabelText("Nombre");
    });

    it('el botón se encuentra en el documento', () => {
        expect(button).toBeInTheDocument();
    })

    it('el header se encuentra en el documento', () => {
        expect(header).toBeInTheDocument();
    })

    it('el campo de texto se encuentra en el documento', () => {
        expect(txt).toBeInTheDocument();
    })

    it('comprobar que cuando el usuario escribe su nombre ' +
        'en el campo de texto se borra si pica el botón', async () => {
        const user = userEvent.setup()
        await user.clear(txt);
        await user.type(txt, 'Me muero de sueño en clase')
        await user.click(button)
        expect(txt).toHaveValue('') //después de hacer click tiene que estar vacío el texto

    });
})