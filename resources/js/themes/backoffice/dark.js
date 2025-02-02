import { createMuiTheme } from '@material-ui/core';

let theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        h5: {
            fontWeight: 500,
            fontSize: 26,
            letterSpacing: 0.5,
        },
    },

    palette: {
        type: 'dark',
        primary: {
            light: '#63ccff',
            main: '#588157',
            dark: '#006db3',
        },
    },

    shape: {
        borderRadius: 8,
    },
});

theme = {
    ...theme,
    overrides: {
        MuiDrawer: {
            paper: {
                backgroundColor: theme.palette.grey[800],
            },
        },

        MuiButton: {
            label: {
                textTransform: 'initial',
            },
            contained: {
                boxShadow: 'none',
                '&:active': {
                    boxShadow: 'none',
                },
            },
        },

        MuiTabs: {
            root: {
                marginLeft: theme.spacing.unit,
            },
            indicator: {
                height: 3,
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3,
                backgroundColor: theme.palette.common.white,
            },
        },

        MuiTab: {
            root: {
                textTransform: 'initial',
                margin: '0 16px',
                minWidth: 0,
                [theme.breakpoints.up('md')]: {
                    minWidth: 0,
                },
            },

            labelContainer: {
                padding: 0,
                [theme.breakpoints.up('md')]: {
                    padding: 0,
                },
            },
        },

        MuiIconButton: {
            root: {
                padding: theme.spacing.unit,
            },
        },

        MuiTooltip: {
            tooltip: {
                borderRadius: 4,
            },
        },

        MuiDivider: {
            root: {
                backgroundColor: theme.palette.text.secondary,
            },
        },

        MuiListItemText: {
            primary: {
                fontWeight: theme.typography.fontWeightMedium,
            },
        },

        MuiListItemIcon: {
            root: {
                color: 'inherit',
                marginRight: 0,
                '& svg': {
                    fontSize: 20,
                },
            },
        },

        MuiAvatar: {
            root: {
                width: 32,
                height: 32,
            },
        },
    },

    props: {
        MuiTab: {
            disableRipple: true,
        },
    },

    mixins: {
        ...theme.mixins,
        toolbar: {
            minHeight: 48,
        },
    },
};

export default theme;
