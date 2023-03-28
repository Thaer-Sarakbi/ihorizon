import { render, screen, waitFor } from "@testing-library/react";
import PokemonsListScreen from "./PokemonsListScreen";

describe('Retreive Pokemos List', () => {
  it('should render pokemon names when api qrespons', async () => {
    render(<PokemonsListScreen />);

    await waitFor(() => {
        screen.getByText("bulbasaur")
    })
  })
})