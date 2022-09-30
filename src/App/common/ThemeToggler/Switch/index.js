import { Box, Slider, SwitchIcon } from "./styled";

const Switch = ({ $on }) => (
    <Box>
        <Slider $on={$on}>
            <SwitchIcon />
        </Slider>
    </Box>
);

export default Switch;