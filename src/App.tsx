import { Stack, FormLabel } from "libs/ui";
import { LoginModule } from "modules/Login";

function App() {
  return (
    <Stack direction="column" spacing={3}>
      <Stack width={300}>
        <FormLabel>Welcome to</FormLabel>
        <LoginModule />
      </Stack>
    </Stack>
  );
}

export default App;
