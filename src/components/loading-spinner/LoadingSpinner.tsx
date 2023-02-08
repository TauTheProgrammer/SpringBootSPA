import React, { PureComponent } from "react";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default class LoadingSpinner extends PureComponent {
    render() {
        return (
            <Backdrop open>
                <CircularProgress />
            </Backdrop>
        );
    }
}
