import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const AdminBar = () => {
    const { postID } = useContext(GlobalContext);
    const currentPostID = postID;

    return (
        <div id="wpadminbar" className="nojq">
            <a
                className="screen-reader-shortcut"
                href="#wp-toolbar"
                tabIndex="1"
            >
                Skip to toolbar
            </a>
            <div
                className="quicklinks"
                id="wp-toolbar"
                role="navigation"
                aria-label="Toolbar"
            >
                <ul
                    role="menu"
                    id="wp-admin-bar-root-default"
                    className="ab-top-menu"
                >
                    <li
                        role="group"
                        id="wp-admin-bar-wp-logo"
                        className="menupop"
                    >
                        <a
                            className="ab-item"
                            role="menuitem"
                            aria-expanded="false"
                            href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-admin/about.php`}
                        >
                            <span className="ab-icon" aria-hidden="true"></span>
                            <span className="screen-reader-text">
                                About WordPress
                            </span>
                        </a>
                        <div className="ab-sub-wrapper">
                            <ul
                                role="menu"
                                aria-label="About WordPress"
                                id="wp-admin-bar-wp-logo-default"
                                className="ab-submenu"
                            >
                                <li role="group" id="wp-admin-bar-about">
                                    <a
                                        className="ab-item"
                                        role="menuitem"
                                        href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-admin/about.php`}
                                    >
                                        About WordPress
                                    </a>
                                </li>
                                <li role="group" id="wp-admin-bar-contribute">
                                    <a
                                        className="ab-item"
                                        role="menuitem"
                                        href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-admin/contribute.php`}
                                    >
                                        Get Involved
                                    </a>
                                </li>
                            </ul>
                            <ul
                                role="menu"
                                aria-label="About WordPress"
                                id="wp-admin-bar-wp-logo-external"
                                className="ab-sub-secondary ab-submenu"
                            >
                                <li role="group" id="wp-admin-bar-wporg">
                                    <a
                                        className="ab-item"
                                        role="menuitem"
                                        href="https://wordpress.org/"
                                    >
                                        WordPress.org
                                    </a>
                                </li>
                                <li
                                    role="group"
                                    id="wp-admin-bar-documentation"
                                >
                                    <a
                                        className="ab-item"
                                        role="menuitem"
                                        href="https://wordpress.org/documentation/"
                                    >
                                        Documentation
                                    </a>
                                </li>
                                <li role="group" id="wp-admin-bar-learn">
                                    <a
                                        className="ab-item"
                                        role="menuitem"
                                        href="https://learn.wordpress.org/"
                                    >
                                        Learn WordPress
                                    </a>
                                </li>
                                <li
                                    role="group"
                                    id="wp-admin-bar-support-forums"
                                >
                                    <a
                                        className="ab-item"
                                        role="menuitem"
                                        href="https://wordpress.org/support/forums/"
                                    >
                                        Support
                                    </a>
                                </li>
                                <li role="group" id="wp-admin-bar-feedback">
                                    <a
                                        className="ab-item"
                                        role="menuitem"
                                        href="https://wordpress.org/support/forum/requests-and-feedback"
                                    >
                                        Feedback
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li
                        role="group"
                        id="wp-admin-bar-site-name"
                        className="menupop"
                    >
                        <a
                            className="ab-item"
                            role="menuitem"
                            aria-expanded="false"
                            href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-admin/`}
                        >
                            Zachary Rener Site
                        </a>
                        <div className="ab-sub-wrapper">
                            <ul
                                role="menu"
                                aria-label="Zachary Rener Site"
                                id="wp-admin-bar-site-name-default"
                                className="ab-submenu"
                            >
                                <li role="group" id="wp-admin-bar-dashboard">
                                    <a
                                        className="ab-item"
                                        role="menuitem"
                                        href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-admin/`}
                                    >
                                        Dashboard
                                    </a>
                                </li>
                                <li role="group" id="wp-admin-bar-plugins">
                                    <a
                                        className="ab-item"
                                        role="menuitem"
                                        href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-admin/plugins.php`}
                                    >
                                        Plugins
                                    </a>
                                </li>
                            </ul>
                            <ul
                                role="menu"
                                aria-label="Zachary Rener Site"
                                id="wp-admin-bar-appearance"
                                className="ab-submenu"
                            >
                                <li role="group" id="wp-admin-bar-themes">
                                    <a
                                        className="ab-item"
                                        role="menuitem"
                                        href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-admin/themes.php`}
                                    >
                                        Themes
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li role="group" id="wp-admin-bar-updates">
                        <a
                            className="ab-item"
                            role="menuitem"
                            href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-admin/update-core.php`}
                        >
                            <span className="ab-icon" aria-hidden="true"></span>
                            <span className="ab-label" aria-hidden="true">
                                1
                            </span>
                            <span className="screen-reader-text updates-available-text">
                                1 update available
                            </span>
                        </a>
                    </li>

                    <li
                        role="group"
                        id="wp-admin-bar-new-content"
                        className="menupop"
                    >
                        <a
                            className="ab-item"
                            role="menuitem"
                            aria-expanded="false"
                            href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-admin/post-new.php`}
                        >
                            <span className="ab-icon" aria-hidden="true"></span>
                            <span className="ab-label">New</span>
                        </a>
                        <div className="ab-sub-wrapper">
                            <ul
                                role="menu"
                                aria-label="New"
                                id="wp-admin-bar-new-content-default"
                                className="ab-submenu"
                            >
                                <li role="group" id="wp-admin-bar-new-post">
                                    <a
                                        className="ab-item"
                                        role="menuitem"
                                        href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-admin/post-new.php`}
                                    >
                                        Post
                                    </a>
                                </li>
                                <li role="group" id="wp-admin-bar-new-media">
                                    <a
                                        className="ab-item"
                                        role="menuitem"
                                        href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-admin/media-new.php`}
                                    >
                                        Media
                                    </a>
                                </li>
                                <li role="group" id="wp-admin-bar-new-page">
                                    <a
                                        className="ab-item"
                                        role="menuitem"
                                        href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-admin/post-new.php?post_type=page`}
                                    >
                                        Page
                                    </a>
                                </li>
                                <li role="group" id="wp-admin-bar-new-projects">
                                    <a
                                        className="ab-item"
                                        role="menuitem"
                                        href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-admin/post-new.php?post_type=projects`}
                                    >
                                        Project
                                    </a>
                                </li>
                                <li role="group" id="wp-admin-bar-new-articles">
                                    <a
                                        className="ab-item"
                                        role="menuitem"
                                        href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-admin/post-new.php?post_type=articles`}
                                    >
                                        Article
                                    </a>
                                </li>
                                <li role="group" id="wp-admin-bar-new-user">
                                    <a
                                        className="ab-item"
                                        role="menuitem"
                                        href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-admin/user-new.php`}
                                    >
                                        User
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li role="group" id="wp-admin-bar-edit">
                        <a
                            className="ab-item"
                            role="menuitem"
                            href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-admin/post.php?post=${currentPostID}&action=edit`}
                        >
                            Edit Post
                        </a>
                    </li>

                    <li
                        role="group"
                        id="wp-admin-bar-wpseo-menu"
                        className="menupop"
                    >
                        <a
                            className="ab-item"
                            role="menuitem"
                            aria-expanded="false"
                            href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-admin/admin.php?page=wpseo_dashboard`}
                        >
                            <div
                                id="yoast-ab-icon"
                                className="ab-item yoast-logo svg"
                            >
                                <span className="screen-reader-text">SEO</span>
                            </div>
                            <div
                                aria-hidden="true"
                                title="Focus keyphrase not set"
                                className="wpseo-score-icon bad adminbar-seo-score"
                            >
                                <span className="wpseo-score-text screen-reader-text">
                                    Focus keyphrase not set
                                </span>
                            </div>
                        </a>
                        <div className="ab-sub-wrapper">
                            <ul
                                role="menu"
                                id="wp-admin-bar-wpseo-menu-default"
                                className="ab-submenu"
                            >
                                <li
                                    role="group"
                                    id="wp-admin-bar-wpseo-seo-focus-keyword"
                                >
                                    <div
                                        className="ab-item ab-empty-item"
                                        tabIndex="0"
                                        role="menuitem"
                                    >
                                        Focus keyphrase:{" "}
                                        <span className="wpseo-focus-keyword">
                                            not set
                                        </span>
                                    </div>
                                </li>
                                <li
                                    role="group"
                                    id="wp-admin-bar-wpseo-seo-score"
                                >
                                    <div
                                        className="ab-item ab-empty-item"
                                        tabIndex="0"
                                        role="menuitem"
                                    >
                                        SEO score:{" "}
                                        <div
                                            aria-hidden="true"
                                            title="Focus keyphrase not set"
                                            className="wpseo-score-icon bad adminbar-sub-menu-score"
                                        >
                                            <span className="wpseo-score-text screen-reader-text">
                                                Focus keyphrase not set
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li
                                    role="group"
                                    id="wp-admin-bar-wpseo-readability-score"
                                >
                                    <div
                                        className="ab-item ab-empty-item"
                                        tabIndex="0"
                                        role="menuitem"
                                    >
                                        Readability:{" "}
                                        <div
                                            aria-hidden="true"
                                            title="Not available"
                                            className="wpseo-score-icon na adminbar-sub-menu-score"
                                        >
                                            <span className="wpseo-score-text screen-reader-text">
                                                Not available
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li
                                    role="group"
                                    id="wp-admin-bar-wpseo-frontend-inspector"
                                >
                                    <a
                                        className="ab-item"
                                        tabIndex="0"
                                        role="menuitem"
                                        href="https://yoa.st/admin-bar-frontend-inspector?php_version=8.1&platform=wordpress&platform_version=6.6.2&software=free&software_version=23.6&days_active=234&user_language=en_US"
                                        target="_blank"
                                    >
                                        Front-end SEO inspector
                                        <span
                                            className="yoast-badge yoast-premium-badge"
                                            id="wpseo-frontend-inspector-badge-premium-badge"
                                        >
                                            Premium
                                        </span>
                                    </a>
                                </li>
                                <li
                                    role="group"
                                    id="wp-admin-bar-wpseo-sub-tools"
                                    className="menupop"
                                >
                                    <div
                                        className="ab-item ab-empty-item"
                                        tabIndex="0"
                                        role="menuitem"
                                        aria-expanded="false"
                                    >
                                        <span
                                            className="wp-admin-bar-arrow"
                                            aria-hidden="true"
                                        ></span>
                                        SEO Tools
                                    </div>
                                    <div className="ab-sub-wrapper">
                                        <ul
                                            role="menu"
                                            id="wp-admin-bar-wpseo-sub-tools-default"
                                            className="ab-submenu"
                                        >
                                            <li
                                                role="group"
                                                id="wp-admin-bar-wpseo-semrush"
                                            >
                                                <a
                                                    className="ab-item"
                                                    role="menuitem"
                                                    href="https://yoa.st/admin-bar-semrush?php_version=8.1&platform=wordpress&platform_version=6.6.2&software=free&software_version=23.6&days_active=234&user_language=en_US"
                                                    target="_blank"
                                                >
                                                    Semrush
                                                </a>
                                            </li>
                                            <li
                                                role="group"
                                                id="wp-admin-bar-wpseo-wincher"
                                            >
                                                <a
                                                    className="ab-item"
                                                    role="menuitem"
                                                    href="https://yoa.st/admin-bar-wincher?php_version=8.1&platform=wordpress&platform_version=6.6.2&software=free&software_version=23.6&days_active=234&user_language=en_US"
                                                    target="_blank"
                                                >
                                                    Wincher
                                                </a>
                                            </li>
                                            <li
                                                role="group"
                                                id="wp-admin-bar-wpseo-google-trends"
                                            >
                                                <a
                                                    className="ab-item"
                                                    role="menuitem"
                                                    href="https://yoa.st/admin-bar-gtrends?php_version=8.1&platform=wordpress&platform_version=6.6.2&software=free&software_version=23.6&days_active=234&user_language=en_US"
                                                    target="_blank"
                                                >
                                                    Google trends
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li
                                    role="group"
                                    id="wp-admin-bar-wpseo-sub-howto"
                                    className="menupop"
                                >
                                    <div
                                        className="ab-item ab-empty-item"
                                        tabIndex="0"
                                        role="menuitem"
                                        aria-expanded="false"
                                    >
                                        <span
                                            className="wp-admin-bar-arrow"
                                            aria-hidden="true"
                                        ></span>
                                        How to
                                    </div>
                                    <div className="ab-sub-wrapper">
                                        <ul
                                            role="menu"
                                            id="wp-admin-bar-wpseo-sub-howto-default"
                                            className="ab-submenu"
                                        >
                                            <li
                                                role="group"
                                                id="wp-admin-bar-wpseo-learn-seo"
                                            >
                                                <a
                                                    className="ab-item"
                                                    role="menuitem"
                                                    href="https://yoa.st/admin-bar-learn-more-seo?php_version=8.1&platform=wordpress&platform_version=6.6.2&software=free&software_version=23.6&days_active=234&user_language=en_US"
                                                    target="_blank"
                                                >
                                                    Learn more SEO
                                                </a>
                                            </li>
                                            <li
                                                role="group"
                                                id="wp-admin-bar-wpseo-improve-blogpost"
                                            >
                                                <a
                                                    className="ab-item"
                                                    role="menuitem"
                                                    href="https://yoa.st/admin-bar-improve-blog-post?php_version=8.1&platform=wordpress&platform_version=6.6.2&software=free&software_version=23.6&days_active=234&user_language=en_US"
                                                    target="_blank"
                                                >
                                                    Improve your blog post
                                                </a>
                                            </li>
                                            <li
                                                role="group"
                                                id="wp-admin-bar-wpseo-write-better-content"
                                            >
                                                <a
                                                    className="ab-item"
                                                    role="menuitem"
                                                    href="https://yoa.st/admin-bar-write-better?php_version=8.1&platform=wordpress&platform_version=6.6.2&software=free&software_version=23.6&days_active=234&user_language=en_US"
                                                    target="_blank"
                                                >
                                                    Write better content
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li
                                    role="group"
                                    id="wp-admin-bar-wpseo-sub-get-help"
                                >
                                    <a
                                        className="ab-item"
                                        tabIndex="0"
                                        role="menuitem"
                                        href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-admin/admin.php?page=wpseo_page_support`}
                                    >
                                        Help
                                    </a>
                                </li>
                                <li
                                    role="group"
                                    id="wp-admin-bar-wpseo-settings"
                                    className="menupop"
                                >
                                    <div
                                        className="ab-item ab-empty-item"
                                        tabIndex="0"
                                        role="menuitem"
                                        aria-expanded="false"
                                    >
                                        <span
                                            className="wp-admin-bar-arrow"
                                            aria-hidden="true"
                                        ></span>
                                        SEO Settings
                                    </div>
                                    <div className="ab-sub-wrapper">
                                        <ul
                                            role="menu"
                                            id="wp-admin-bar-wpseo-settings-default"
                                            className="ab-submenu"
                                        >
                                            <li
                                                role="group"
                                                id="wp-admin-bar-wpseo-general"
                                            >
                                                <a
                                                    className="ab-item"
                                                    role="menuitem"
                                                    href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-admin/admin.php?page=wpseo_dashboard`}
                                                >
                                                    General
                                                </a>
                                            </li>
                                            <li
                                                role="group"
                                                id="wp-admin-bar-wpseo-page-settings"
                                            >
                                                <a
                                                    className="ab-item"
                                                    role="menuitem"
                                                    href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-admin/admin.php?page=wpseo_page_settings`}
                                                >
                                                    Settings
                                                </a>
                                            </li>
                                            <li
                                                role="group"
                                                id="wp-admin-bar-wpseo-tools"
                                            >
                                                <a
                                                    className="ab-item"
                                                    role="menuitem"
                                                    href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-admin/admin.php?page=wpseo_tools`}
                                                >
                                                    Tools
                                                </a>
                                            </li>
                                            <li
                                                role="group"
                                                id="wp-admin-bar-wpseo-licenses"
                                            >
                                                <a
                                                    className="ab-item"
                                                    role="menuitem"
                                                    href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-admin/admin.php?page=wpseo_licenses`}
                                                >
                                                    Upgrades
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li
                                    role="group"
                                    id="wp-admin-bar-wpseo-get-premium"
                                >
                                    <div
                                        className="ab-item ab-empty-item"
                                        tabIndex="0"
                                        role="menuitem"
                                    >
                                        <a
                                            href="https://yoa.st/admin-bar-get-premium?php_version=8.1&platform=wordpress&platform_version=6.6.2&software=free&software_version=23.6&days_active=234&user_language=en_US"
                                            target="_blank"
                                            data-action="load-nfd-ctb"
                                            data-ctb-id="f6a84663-465f-4cb5-8ba5-f7a6d72224b2"
                                            style={{ padding: 0 }}
                                        >
                                            Get Yoast SEO Premium »
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <ul
                    role="menu"
                    id="wp-admin-bar-top-secondary"
                    className="ab-top-secondary ab-top-menu"
                >
                    <li
                        role="group"
                        id="wp-admin-bar-my-account"
                        className="menupop with-avatar"
                    >
                        <div className="ab-sub-wrapper">
                            <ul
                                role="menu"
                                aria-label="Howdy, zacharyrener"
                                id="wp-admin-bar-user-actions"
                                className="ab-submenu"
                            >
                                <li role="group" id="wp-admin-bar-user-info">
                                    <a
                                        className="ab-item"
                                        role="menuitem"
                                        href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-admin/profile.php`}
                                    >
                                        <img
                                            alt=""
                                            src="http://0.gravatar.com/avatar/c533dee96e37379eae32f30213bc54dd?s=64&d=mm&r=g"
                                            className="avatar avatar-64 photo"
                                            height="64"
                                            width="64"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <span className="display-name">
                                            zacharyrener
                                        </span>
                                        <span className="display-name edit-profile">
                                            Edit Profile
                                        </span>
                                    </a>
                                </li>
                                <li role="group" id="wp-admin-bar-logout">
                                    <a
                                        className="ab-item"
                                        role="menuitem"
                                        href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-login.php?action=logout&_wpnonce=b3f35aa152`}
                                    >
                                        Log Out
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AdminBar;
