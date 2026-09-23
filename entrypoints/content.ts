export default defineContentScript({
  matches: ['https://forum.cocos.org/*'],
  main() {
    console.log('Hello content. cocos');
    const style = document.createElement("style");

    style.textContent = `

:root {
  --c_0: #000;
  --c_1: #111;
  --c_2: #33acfc;
  --t_0: #fff;
  --tr: transparent;
}

.modal-inner-container,
.menu-panel,
.select-kit .select-kit-collection,
.select-kit .select-kit-body,
#reply-control {
  background: var(--tr) !important;
  backdrop-filter: blur(3px);
}

.fullscreen-composer #reply-control.fullscreen:before,
.user-menu .quick-access-panel .show-all a:hover,
.select-kit .no-content,
.select-kit .is-loading {
  background: var(--tr);
}

input[type="text"],
input[type="number"] {
  color: var(--t_0);
  background: var(--tr);
}

.user-menu .quick-access-panel li:hover span:first-child,
.message-item:hover .message-excerpt,
.menu-panel li a.widget-link:hover,
.menu-panel li a.widget-link:focus,
.menu-panel li a.categories-link:hover,
.menu-panel li a.categories-link:focus,
.menu-panel li.heading a.widget-link:hover,
.menu-panel li.heading a.widget-link:focus,
.menu-panel li.heading a.categories-link:hover,
.menu-panel li.heading a.categories-link:focus {
  color: var(--c_1);
}

.menu-panel li a.widget-link,
.menu-panel li a.categories-link,
.menu-panel li.heading a.widget-link,
.menu-panel li.heading a.categories-link,
.large-notification a span:first-child,
.message-item .message-excerpt,
.user-menu .quick-access-panel li span:first-child,
.badge-wrapper.bullet span.badge-category,
.category-list tbody .category h3 a[href],
.topic-list-main-link a.title,
.topic-list .main-link a.title,
.latest-topic-list-item .main-link a.title,
.select-kit.dropdown-select-box.period-chooser .period-chooser-header h2.selected-name .date-section,
.extra-info-wrapper .topic-link,
#topic-title h1 a {
  color: var(--t_0);
}

div.ac-wrap {
  background-color: var(--tr);
}

.select-kit .select-kit-row.is-highlighted {
  color: var(--c_0);
}

blockquote,
.d-header.clearfix,
.select-kit.combo-box .select-kit-header,
.search-container .search-advanced-sidebar .search-advanced-title,
.search-container .search-advanced-sidebar .search-advanced-filters,
.topic-map,
.topic-map .buttons .btn,
.post-notice {
  background: var(--c_0);
}

.menu-panel,
.topic-map section,
.topic-map,
.post-notice,
.select-kit.single-select .select-kit-filter.is-expanded {
  border: none;
}

.bootbox.modal,
html {
  color: var(--t_0);
  background: var(--c_1);
}

.d-header.clearfix {
  background: var(--c_0)
}

.list-controls .combo-box .combo-box-header,
.btn {
  border: none;
  background: var(--c_0);
  color: var(--t_0);
}

.nav-pills>li>a {
  color: var(--c_2) !important;

  &:hover {
    color: var(--t_0) !important;
    background: var(--c_2) !important;
  }
}

.nav-pills>li a.active {
  color: var(--t_0) !important;
  background: var(--c_2) !important;
}

::-webkit-scrollbar {
  appearance: none;
  width: 7px;
  background: var(--c_1);
}

::-webkit-scrollbar-thumb {
  background: var(--c_2);
}

/*首页 右上角 */
.drop-down-mode .d-header-icons .active .icon {
  border-color: var(--tr);
  background: var(--c_1);
}

.user-menu .quick-access-panel .show-all a,
.user-menu .quick-access-panel .read {
  background: var(--tr);
}

div.menu-links-header .menu-links-row li a.active {
  border-bottom: none;
}

/*个人页*/
.user-main .about .details {
  background: var(--tr) !important;
}

.user-stream .item,
.user-stream .user-stream-item,
.user-content {
  background: var(--tr) !important;
}

/*链接点击数量*/
.badge-notification.clicks {
  background: var(--c_0) !important;
}

/* 列表鼠标悬浮高亮部分 */
.select-kit .select-kit-row.is-highlighted {
  color: var(--t_0);
  background: var(--c_2);
}

/**创建帖子*/
.select-kit .select-kit-row.is-selected,
.grippie{
  background-color: var(--c_2) !important;
}
.d-editor-textarea-wrapper {
  background-color: var(--c_1) !important;
}
select, textarea{
    color:var(--t_0);
}
/*用户卡片*/
.user-card,
.user-card .card-content {
  background: transparent;
  background-size: cover;
  backdrop-filter: blur(10px);
}
`;

    document.head.appendChild(style);
  },
});
