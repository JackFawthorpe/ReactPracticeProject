import { useState } from "react";
import { MenuItem } from "react-pro-sidebar";
import {Box, Typography, useTheme} from "@mui/material";
import { Link } from "react-router-dom";
import {tokens } from "../../theme";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
            active={selected === title}
            style={{
                color: colors.grey[100],
            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <div>
            <Box>
            </Box>
        </div>
    )
}

export default Sidebar;