import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Avatar,
  Button,
  Tooltip,
  Popover,
  Badge,
} from "@mui/material";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

const pages = ["Collections", "Men", "Women", "About", "Contact"];

function ResponsiveAppBar() {
  const { cartQuantity, clearCart } = useContext(CartContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleCartClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);
  const open = Boolean(anchorEl);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        boxShadow: "none",
        borderBottom: "1px solid #eee",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: "90px" }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "inherit",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            sneakers
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  color: "#000",
                  display: "block",
                  fontWeight: 500,
                  textTransform: "none",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            sneakers
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box
            sx={{ flexGrow: 0, display: "flex", alignItems: "center", gap: 2 }}
          >
            <Tooltip title="Cart">
              <IconButton onClick={handleCartClick}>
                <Badge badgeContent={cartQuantity} color="warning">
                  <ShoppingCartOutlinedIcon sx={{ color: "#000" }} />
                </Badge>
              </IconButton>
            </Tooltip>

            <Tooltip title="Profile">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="image-avatar.png" />
              </IconButton>
            </Tooltip>

            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              PaperProps={{ sx: { p: 2, borderRadius: 2, width: 250 } }}
            >
              <Typography fontWeight="bold" gutterBottom>
                Cart
              </Typography>
              {cartQuantity === 0 ? (
                <Typography variant="body2" color="text.secondary">
                  Your cart is empty.
                </Typography>
              ) : (
                <>
                  <Typography>You have {cartQuantity} item(s)</Typography>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    sx={{ mt: 1 }}
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </>
              )}
            </Popover>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
