import { LoginPage } from '../scenes/public/login';
import { HomeScene } from '../scenes/private/home';
import { ReportScene } from '../scenes/private/reports';
import { SettingsScene } from '../scenes/private/settings';
import { hello } from '../scenes/private/hello/hello';


export const routes = {
    private: [
        { path: '/dashboard', component: HomeScene },
        { path: '/dashboard/hello', component: hello },
        { path: '/dashboard/reports', component: ReportScene },
        { path: '/dashboard/settings', component: SettingsScene }
    ],
    public: [
        { path: '/login', component: LoginPage }
    ]
};