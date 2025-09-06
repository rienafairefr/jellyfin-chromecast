import { RepeatMode } from '@jellyfin/sdk/lib/generated-client/models/repeat-mode';

import './components/maincontroller';
import './css/jellyfin.css';

window.mediaElement = document.getElementById('video-player');

window.repeatMode = RepeatMode.RepeatNone;

Sentry.onLoad(() => {
    Sentry.init({
        dsn: import.meta.env.VITE_SENTRY_DSN
    });
});
