import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { DownloadSimple, Image } from "phosphor-react";
import React from "react";
// import Embed from "react-embed";
import OptionMsg from "./OptionMsg";

const Timeline = ({ el }) => {
  const theme = useTheme();

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Divider width="46%" />
      <Typography variant="caption" sx={{ color: theme.palette.text }}>
        {el.text}
      </Typography>
      <Divider width="46%" />
    </Stack>
  );
};

const TextMsg = ({ el, menu }) => {
  const theme = useTheme();

  return (
    <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
      <Box
        px={1.5}
        py={1.5}
        sx={{
          backgroundColor: el.incoming
            ? alpha(theme.palette.background.default, 1)
            : theme.palette.primary.main,
          borderRadius: 1.5,
          border: el.incoming ? 1 : "none",
          borderColor: el.incoming ? "#cbd5e1" : "none",
          width: "max-content",
        }}
      >
        <Typography
          variant="body2"
          color={el.incoming ? theme.palette.text : "#FFF"}
        >
          {el.message}
        </Typography>
      </Box>
      {menu && <OptionMsg />}
    </Stack>
  );
};

const MediaMsg = ({ el, menu }) => {
  const theme = useTheme();

  return (
    <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
      <Box
        px={1.5}
        py={1.5}
        sx={{
          backgroundColor: el.incoming
            ? alpha(theme.palette.background.default, 1)
            : theme.palette.primary.main,
          border: el.incoming ? 1 : "none",
          borderColor: el.incoming ? "#cbd5e1" : "none",
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={1}>
          <img
            src={el.img}
            alt={el.message}
            style={{ maxHeight: 210, borderRadius: "10px" }}
          />
          <Typography
            variant="body2"
            color={el.incoming ? theme.palette.text : "#FFF"}
          >
            {el.message}
          </Typography>
        </Stack>
      </Box>
      {menu && <OptionMsg />}
    </Stack>
  );
};

const DocMsg = ({ el, menu }) => {
  const theme = useTheme();

  return (
    <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
      <Box
        px={1.5}
        py={1.5}
        sx={{
          backgroundColor: el.incoming
            ? alpha(theme.palette.background.default, 1)
            : theme.palette.primary.main,
          border: el.incoming ? 1 : "none",
          borderColor: el.incoming ? "#cbd5e1" : "none",
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            direction="row"
            spacing={3}
            alignItems="center"
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <Image size={48} />
            <Typography variant="caption">Abstract.png</Typography>
            <IconButton>
              <DownloadSimple />
            </IconButton>
          </Stack>
          <Typography
            variant="body2"
            color={el.incoming ? theme.palette.text : "#fff"}
          >
            {el.message}
          </Typography>
        </Stack>
      </Box>
      {menu && <OptionMsg />}
    </Stack>
  );
};

const LinkMsg = ({ el, menu }) => {
  const theme = useTheme();

  return (
    <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
      <Box
        px={1.5}
        py={1.5}
        sx={{
          backgroundColor: el.incoming
            ? alpha(theme.palette.background.default, 1)
            : theme.palette.primary.main,
          border: el.incoming ? 1 : "none",
          borderColor: el.incoming ? "#cbd5e1" : "none",
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            direction="column"
            spacing={3}
            alignItems="start"
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <Stack direction={"column"} spacing={2}>
              {/* <Embed
                width="300px"
                isDark
                url={`https://youtu.be/xoWxBR34qLE`}
              /> */}
            </Stack>
          </Stack>
        </Stack>
      </Box>
      {menu && <OptionMsg />}
    </Stack>
  );
};

const ReplyMsg = ({ el, menu }) => {
  const theme = useTheme();

  return (
    <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
      <Box
        px={1.5}
        py={1.5}
        sx={{
          backgroundColor: el.incoming
            ? alpha(theme.palette.background.paper, 1)
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            direction="column"
            spacing={3}
            alignItems="center"
            sx={{
              backgroundColor: alpha(theme.palette.background.paper, 1),

              borderRadius: 1,
            }}
          >
            <Typography variant="body2" color={theme.palette.text}>
              {el.message}
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            color={el.incoming ? theme.palette.text : "#fff"}
          >
            {el.reply}
          </Typography>
        </Stack>
      </Box>
      {menu && <OptionMsg />}
    </Stack>
  );
};

export { DocMsg, LinkMsg, MediaMsg, TextMsg, ReplyMsg, Timeline };
