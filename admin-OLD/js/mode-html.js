



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>ace-builds/mode-html.js at master · ajaxorg/ace-builds · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="ajaxorg/ace-builds" name="twitter:title" /><meta content="Contribute to ace-builds development by creating an account on GitHub." name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/168515?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/168515?v=3&amp;s=400" property="og:image" /><meta content="ajaxorg/ace-builds" property="og:title" /><meta content="https://github.com/ajaxorg/ace-builds" property="og:url" /><meta content="Contribute to ace-builds development by creating an account on GitHub." property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="80BB6116:1377:38CE329:569A8A96" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />
<meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged Out">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

        <meta name="expected-hostname" content="github.com">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="c41749de338618cfb34e2f34ad25e46228f78206" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-e9bcbd2b27a6b792794dfc31fff5f4f8e7245c761ddb1a44cb19b6a6cc5e4ff7.css" integrity="sha256-6by9Kyemt5J5Tfwx//X0+OckXHYd2xpEyxm2psxeT/c=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-70af51f1bed4904749e6ef486ad11871c8ce4361ac82bb5f96a090b7f5346580.css" integrity="sha256-cK9R8b7UkEdJ5u9IatEYccjOQ2GsgrtflqCQt/U0ZYA=" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="33df7816266be22aad9db35bc85c5c41">

      
  <meta name="description" content="Contribute to ace-builds development by creating an account on GitHub.">
  <meta name="go-import" content="github.com/ajaxorg/ace-builds git https://github.com/ajaxorg/ace-builds.git">

  <meta content="168515" name="octolytics-dimension-user_id" /><meta content="ajaxorg" name="octolytics-dimension-user_login" /><meta content="4124657" name="octolytics-dimension-repository_id" /><meta content="ajaxorg/ace-builds" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="4124657" name="octolytics-dimension-repository_network_root_id" /><meta content="ajaxorg/ace-builds" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/ajaxorg/ace-builds/commits/master.atom" rel="alternate" title="Recent Commits to ace-builds:master" type="application/atom+xml">

  </head>


  <body class="logged_out   env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      
      <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span aria-hidden="true" class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="btn btn-primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="btn" href="/login?return_to=%2Fajaxorg%2Face-builds%2Fblob%2Fmaster%2Fsrc-min-noconflict%2Fmode-html.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/ajaxorg/ace-builds/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/ajaxorg/ace-builds/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/pricing" data-ga-click="(Logged out) Header, go to pricing, text:pricing">Pricing</a>
          </li>
      </ul>

  </div>
</div>



    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div id="js-repo-pjax-container" class="context-loader-container js-repo-nav-next" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Fajaxorg%2Face-builds"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <span aria-hidden="true" class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="/ajaxorg/ace-builds/watchers">
    109
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fajaxorg%2Face-builds"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span aria-hidden="true" class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/ajaxorg/ace-builds/stargazers">
      893
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fajaxorg%2Face-builds"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span aria-hidden="true" class="octicon octicon-repo-forked"></span>
        Fork
      </a>

    <a href="/ajaxorg/ace-builds/network" class="social-count">
      853
    </a>
  </li>
</ul>

    <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span aria-hidden="true" class="octicon octicon-repo"></span>
  <span class="author"><a href="/ajaxorg" class="url fn" itemprop="url" rel="author"><span itemprop="title">ajaxorg</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/ajaxorg/ace-builds" data-pjax="#js-repo-pjax-container">ace-builds</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <a href="/ajaxorg/ace-builds" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /ajaxorg/ace-builds">
    <span aria-hidden="true" class="octicon octicon-code"></span>
    Code
</a>
    <a href="/ajaxorg/ace-builds/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /ajaxorg/ace-builds/issues">
      <span aria-hidden="true" class="octicon octicon-issue-opened"></span>
      Issues
      <span class="counter">17</span>
</a>
  <a href="/ajaxorg/ace-builds/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /ajaxorg/ace-builds/pulls">
    <span aria-hidden="true" class="octicon octicon-git-pull-request"></span>
    Pull requests
    <span class="counter">3</span>
</a>

  <a href="/ajaxorg/ace-builds/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /ajaxorg/ace-builds/pulse">
    <span aria-hidden="true" class="octicon octicon-pulse"></span>
    Pulse
</a>
  <a href="/ajaxorg/ace-builds/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /ajaxorg/ace-builds/graphs">
    <span aria-hidden="true" class="octicon octicon-graph"></span>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/ajaxorg/ace-builds/blob/3fb55e8e374ab02ce47c1ae55ffb60a1835f3055/src-min-noconflict/mode-html.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:f0c240c4e5cf5415e75f52a7fecad5f2 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span aria-label="Close" class="octicon octicon-x js-menu-close" role="button"></span>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/ajaxorg/ace-builds/blob/gh-pages/src-min-noconflict/mode-html.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/ajaxorg/ace-builds/blob/master/src-min-noconflict/mode-html.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.2.2/src-min-noconflict/mode-html.js"
              data-name="v1.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.2">
                v1.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.2.1/src-min-noconflict/mode-html.js"
              data-name="v1.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.1">
                v1.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.2.0/src-min-noconflict/mode-html.js"
              data-name="v1.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.0">
                v1.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.9/src-min-noconflict/mode-html.js"
              data-name="v1.1.9"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.9">
                v1.1.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.8/src-min-noconflict/mode-html.js"
              data-name="v1.1.8"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.8">
                v1.1.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.7/src-min-noconflict/mode-html.js"
              data-name="v1.1.7"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.7">
                v1.1.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.6/src-min-noconflict/mode-html.js"
              data-name="v1.1.6"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.6">
                v1.1.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.5/src-min-noconflict/mode-html.js"
              data-name="v1.1.5"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.5">
                v1.1.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.4/src-min-noconflict/mode-html.js"
              data-name="v1.1.4"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.4">
                v1.1.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.3/src-min-noconflict/mode-html.js"
              data-name="v1.1.3"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.3">
                v1.1.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.2/src-min-noconflict/mode-html.js"
              data-name="v1.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.2">
                v1.1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.01/src-min-noconflict/mode-html.js"
              data-name="v1.1.01"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.01">
                v1.1.01
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.1/src-min-noconflict/mode-html.js"
              data-name="v1.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.1">
                v1.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.0.0/src-min-noconflict/mode-html.js"
              data-name="v1.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0">
                v1.0.0
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/ajaxorg/ace-builds/find/master"
          class="js-show-file-finder btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/ajaxorg/ace-builds" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">ace-builds</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/ajaxorg/ace-builds/tree/master/src-min-noconflict" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">src-min-noconflict</span></a></span><span class="separator">/</span><strong class="final-path">mode-html.js</strong>
  </div>
</div>

<include-fragment class="commit-tease" src="/ajaxorg/ace-builds/contributors/master/src-min-noconflict/mode-html.js">
  <div>
    Fetching contributors&hellip;
  </div>

  <div class="commit-tease-contributors">
    <img alt="" class="loader-loading left" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" />
    <span class="loader-error">Cannot retrieve contributors at this time</span>
  </div>
</include-fragment>
<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/ajaxorg/ace-builds/raw/master/src-min-noconflict/mode-html.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/ajaxorg/ace-builds/blame/master/src-min-noconflict/mode-html.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/ajaxorg/ace-builds/commits/master/src-min-noconflict/mode-html.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://windows.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <span aria-hidden="true" class="octicon octicon-device-desktop"></span>
        </a>

        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <span aria-hidden="true" class="octicon octicon-pencil"></span>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <span aria-hidden="true" class="octicon octicon-trashcan"></span>
        </button>
  </div>

  <div class="file-info">
      1 lines (1 sloc)
      <span class="file-info-divider"></span>
    64.7 KB
  </div>
</div>

  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">ace.define(&quot;ace/mode/doc_comment_highlight_rules&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/mode/text_highlight_rules&quot;],function(e,t,n){&quot;use strict&quot;;var r=e(&quot;../lib/oop&quot;),i=e(&quot;./text_highlight_rules&quot;).TextHighlightRules,s=function(){this.$rules={start:[{token:&quot;comment.doc.tag&quot;,regex:&quot;@[\\w\\d_]+&quot;},s.getTagRule(),{defaultToken:&quot;comment.doc&quot;,caseInsensitive:!0}]}};r.inherits(s,i),s.getTagRule=function(e){return{token:&quot;comment.doc.tag.storage.type&quot;,regex:&quot;\\b(?:TODO|FIXME|XXX|HACK)\\b&quot;}},s.getStartRule=function(e){return{token:&quot;comment.doc&quot;,regex:&quot;\\/\\*(?=\\*)&quot;,next:e}},s.getEndRule=function(e){return{token:&quot;comment.doc&quot;,regex:&quot;\\*\\/&quot;,next:e}},t.DocCommentHighlightRules=s}),ace.define(&quot;ace/mode/javascript_highlight_rules&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/mode/doc_comment_highlight_rules&quot;,&quot;ace/mode/text_highlight_rules&quot;],function(e,t,n){&quot;use strict&quot;;function a(){var e=o.replace(&quot;\\d&quot;,&quot;\\d\\-&quot;),t={onMatch:function(e,t,n){var r=e.charAt(1)==&quot;/&quot;?2:1;if(r==1)t!=this.nextState?n.unshift(this.next,this.nextState,0):n.unshift(this.next),n[2]++;else if(r==2&amp;&amp;t==this.nextState){n[1]--;if(!n[1]||n[1]&lt;0)n.shift(),n.shift()}return[{type:&quot;meta.tag.punctuation.&quot;+(r==1?&quot;&quot;:&quot;end-&quot;)+&quot;tag-open.xml&quot;,value:e.slice(0,r)},{type:&quot;meta.tag.tag-name.xml&quot;,value:e.substr(r)}]},regex:&quot;&lt;/?&quot;+e+&quot;&quot;,next:&quot;jsxAttributes&quot;,nextState:&quot;jsx&quot;};this.$rules.start.unshift(t);var n={regex:&quot;{&quot;,token:&quot;paren.quasi.start&quot;,push:&quot;start&quot;};this.$rules.jsx=[n,t,{include:&quot;reference&quot;},{defaultToken:&quot;string&quot;}],this.$rules.jsxAttributes=[{token:&quot;meta.tag.punctuation.tag-close.xml&quot;,regex:&quot;/?&gt;&quot;,onMatch:function(e,t,n){return t==n[0]&amp;&amp;n.shift(),e.length==2&amp;&amp;(n[0]==this.nextState&amp;&amp;n[1]--,(!n[1]||n[1]&lt;0)&amp;&amp;n.splice(0,2)),this.next=n[0]||&quot;start&quot;,[{type:this.token,value:e}]},nextState:&quot;jsx&quot;},n,{token:&quot;entity.other.attribute-name.xml&quot;,regex:e},{token:&quot;keyword.operator.attribute-equals.xml&quot;,regex:&quot;=&quot;},{token:&quot;text.tag-whitespace.xml&quot;,regex:&quot;\\s+&quot;},{token:&quot;string.attribute-value.xml&quot;,regex:&quot;&#39;&quot;,stateName:&quot;jsx_attr_q&quot;,push:[{token:&quot;string.attribute-value.xml&quot;,regex:&quot;&#39;&quot;,next:&quot;pop&quot;},n,{include:&quot;reference&quot;},{defaultToken:&quot;string.attribute-value.xml&quot;}]},{token:&quot;string.attribute-value.xml&quot;,regex:&#39;&quot;&#39;,stateName:&quot;jsx_attr_qq&quot;,push:[n,{token:&quot;string.attribute-value.xml&quot;,regex:&#39;&quot;&#39;,next:&quot;pop&quot;},{include:&quot;reference&quot;},{defaultToken:&quot;string.attribute-value.xml&quot;}]}],this.$rules.reference=[{token:&quot;constant.language.escape.reference.xml&quot;,regex:&quot;(?:&amp;#[0-9]+;)|(?:&amp;#x[0-9a-fA-F]+;)|(?:&amp;[a-zA-Z0-9_:\\.-]+;)&quot;}]}var r=e(&quot;../lib/oop&quot;),i=e(&quot;./doc_comment_highlight_rules&quot;).DocCommentHighlightRules,s=e(&quot;./text_highlight_rules&quot;).TextHighlightRules,o=&quot;[a-zA-Z\\$_\u00a1-\uffff][a-zA-Z\\d\\$_\u00a1-\uffff]*\\b&quot;,u=function(e){var t=this.createKeywordMapper({&quot;variable.language&quot;:&quot;Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document&quot;,keyword:&quot;const|yield|import|get|set|break|case|catch|continue|default|delete|do|else|finally|for|function|if|in|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static&quot;,&quot;storage.type&quot;:&quot;const|let|var|function&quot;,&quot;constant.language&quot;:&quot;null|Infinity|NaN|undefined&quot;,&quot;support.function&quot;:&quot;alert&quot;,&quot;constant.language.boolean&quot;:&quot;true|false&quot;},&quot;identifier&quot;),n=&quot;case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void&quot;,r=&quot;\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)&quot;;this.$rules={no_regex:[{token:&quot;comment&quot;,regex:&quot;\\/\\/&quot;,next:&quot;line_comment&quot;},i.getStartRule(&quot;doc-start&quot;),{token:&quot;comment&quot;,regex:/\/\*/,next:&quot;comment&quot;},{token:&quot;string&quot;,regex:&quot;&#39;(?=.)&quot;,next:&quot;qstring&quot;},{token:&quot;string&quot;,regex:&#39;&quot;(?=.)&#39;,next:&quot;qqstring&quot;},{token:&quot;constant.numeric&quot;,regex:/0[xX][0-9a-fA-F]+\b/},{token:&quot;constant.numeric&quot;,regex:/[+-]?\d+(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?\b/},{token:[&quot;storage.type&quot;,&quot;punctuation.operator&quot;,&quot;support.function&quot;,&quot;punctuation.operator&quot;,&quot;entity.name.function&quot;,&quot;text&quot;,&quot;keyword.operator&quot;],regex:&quot;(&quot;+o+&quot;)(\\.)(prototype)(\\.)(&quot;+o+&quot;)(\\s*)(=)&quot;,next:&quot;function_arguments&quot;},{token:[&quot;storage.type&quot;,&quot;punctuation.operator&quot;,&quot;entity.name.function&quot;,&quot;text&quot;,&quot;keyword.operator&quot;,&quot;text&quot;,&quot;storage.type&quot;,&quot;text&quot;,&quot;paren.lparen&quot;],regex:&quot;(&quot;+o+&quot;)(\\.)(&quot;+o+&quot;)(\\s*)(=)(\\s*)(function)(\\s*)(\\()&quot;,next:&quot;function_arguments&quot;},{token:[&quot;entity.name.function&quot;,&quot;text&quot;,&quot;keyword.operator&quot;,&quot;text&quot;,&quot;storage.type&quot;,&quot;text&quot;,&quot;paren.lparen&quot;],regex:&quot;(&quot;+o+&quot;)(\\s*)(=)(\\s*)(function)(\\s*)(\\()&quot;,next:&quot;function_arguments&quot;},{token:[&quot;storage.type&quot;,&quot;punctuation.operator&quot;,&quot;entity.name.function&quot;,&quot;text&quot;,&quot;keyword.operator&quot;,&quot;text&quot;,&quot;storage.type&quot;,&quot;text&quot;,&quot;entity.name.function&quot;,&quot;text&quot;,&quot;paren.lparen&quot;],regex:&quot;(&quot;+o+&quot;)(\\.)(&quot;+o+&quot;)(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()&quot;,next:&quot;function_arguments&quot;},{token:[&quot;storage.type&quot;,&quot;text&quot;,&quot;entity.name.function&quot;,&quot;text&quot;,&quot;paren.lparen&quot;],regex:&quot;(function)(\\s+)(&quot;+o+&quot;)(\\s*)(\\()&quot;,next:&quot;function_arguments&quot;},{token:[&quot;entity.name.function&quot;,&quot;text&quot;,&quot;punctuation.operator&quot;,&quot;text&quot;,&quot;storage.type&quot;,&quot;text&quot;,&quot;paren.lparen&quot;],regex:&quot;(&quot;+o+&quot;)(\\s*)(:)(\\s*)(function)(\\s*)(\\()&quot;,next:&quot;function_arguments&quot;},{token:[&quot;text&quot;,&quot;text&quot;,&quot;storage.type&quot;,&quot;text&quot;,&quot;paren.lparen&quot;],regex:&quot;(:)(\\s*)(function)(\\s*)(\\()&quot;,next:&quot;function_arguments&quot;},{token:&quot;keyword&quot;,regex:&quot;(?:&quot;+n+&quot;)\\b&quot;,next:&quot;start&quot;},{token:[&quot;support.constant&quot;],regex:/that\b/},{token:[&quot;storage.type&quot;,&quot;punctuation.operator&quot;,&quot;support.function.firebug&quot;],regex:/(console)(\.)(warn|info|log|error|time|trace|timeEnd|assert)\b/},{token:t,regex:o},{token:&quot;punctuation.operator&quot;,regex:/[.](?![.])/,next:&quot;property&quot;},{token:&quot;keyword.operator&quot;,regex:/--|\+\+|\.{3}|===|==|=|!=|!==|&lt;=|&gt;=|&lt;&lt;=|&gt;&gt;=|&gt;&gt;&gt;=|&lt;&gt;|&lt;|&gt;|!|&amp;&amp;|\|\||\?\:|[!$%&amp;*+\-~\/^]=?/,next:&quot;start&quot;},{token:&quot;punctuation.operator&quot;,regex:/[?:,;.]/,next:&quot;start&quot;},{token:&quot;paren.lparen&quot;,regex:/[\[({]/,next:&quot;start&quot;},{token:&quot;paren.rparen&quot;,regex:/[\])}]/},{token:&quot;comment&quot;,regex:/^#!.*$/}],property:[{token:&quot;text&quot;,regex:&quot;\\s+&quot;},{token:[&quot;storage.type&quot;,&quot;punctuation.operator&quot;,&quot;entity.name.function&quot;,&quot;text&quot;,&quot;keyword.operator&quot;,&quot;text&quot;,&quot;storage.type&quot;,&quot;text&quot;,&quot;entity.name.function&quot;,&quot;text&quot;,&quot;paren.lparen&quot;],regex:&quot;(&quot;+o+&quot;)(\\.)(&quot;+o+&quot;)(\\s*)(=)(\\s*)(function)(?:(\\s+)(\\w+))?(\\s*)(\\()&quot;,next:&quot;function_arguments&quot;},{token:&quot;punctuation.operator&quot;,regex:/[.](?![.])/},{token:&quot;support.function&quot;,regex:/(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/},{token:&quot;support.function.dom&quot;,regex:/(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/},{token:&quot;support.constant&quot;,regex:/(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/},{token:&quot;identifier&quot;,regex:o},{regex:&quot;&quot;,token:&quot;empty&quot;,next:&quot;no_regex&quot;}],start:[i.getStartRule(&quot;doc-start&quot;),{token:&quot;comment&quot;,regex:&quot;\\/\\*&quot;,next:&quot;comment_regex_allowed&quot;},{token:&quot;comment&quot;,regex:&quot;\\/\\/&quot;,next:&quot;line_comment_regex_allowed&quot;},{token:&quot;string.regexp&quot;,regex:&quot;\\/&quot;,next:&quot;regex&quot;},{token:&quot;text&quot;,regex:&quot;\\s+|^$&quot;,next:&quot;start&quot;},{token:&quot;empty&quot;,regex:&quot;&quot;,next:&quot;no_regex&quot;}],regex:[{token:&quot;regexp.keyword.operator&quot;,regex:&quot;\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)&quot;},{token:&quot;string.regexp&quot;,regex:&quot;/[sxngimy]*&quot;,next:&quot;no_regex&quot;},{token:&quot;invalid&quot;,regex:/\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/},{token:&quot;constant.language.escape&quot;,regex:/\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/},{token:&quot;constant.language.delimiter&quot;,regex:/\|/},{token:&quot;constant.language.escape&quot;,regex:/\[\^?/,next:&quot;regex_character_class&quot;},{token:&quot;empty&quot;,regex:&quot;$&quot;,next:&quot;no_regex&quot;},{defaultToken:&quot;string.regexp&quot;}],regex_character_class:[{token:&quot;regexp.charclass.keyword.operator&quot;,regex:&quot;\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)&quot;},{token:&quot;constant.language.escape&quot;,regex:&quot;]&quot;,next:&quot;regex&quot;},{token:&quot;constant.language.escape&quot;,regex:&quot;-&quot;},{token:&quot;empty&quot;,regex:&quot;$&quot;,next:&quot;no_regex&quot;},{defaultToken:&quot;string.regexp.charachterclass&quot;}],function_arguments:[{token:&quot;variable.parameter&quot;,regex:o},{token:&quot;punctuation.operator&quot;,regex:&quot;[, ]+&quot;},{token:&quot;punctuation.operator&quot;,regex:&quot;$&quot;},{token:&quot;empty&quot;,regex:&quot;&quot;,next:&quot;no_regex&quot;}],comment_regex_allowed:[i.getTagRule(),{token:&quot;comment&quot;,regex:&quot;\\*\\/&quot;,next:&quot;start&quot;},{defaultToken:&quot;comment&quot;,caseInsensitive:!0}],comment:[i.getTagRule(),{token:&quot;comment&quot;,regex:&quot;\\*\\/&quot;,next:&quot;no_regex&quot;},{defaultToken:&quot;comment&quot;,caseInsensitive:!0}],line_comment_regex_allowed:[i.getTagRule(),{token:&quot;comment&quot;,regex:&quot;$|^&quot;,next:&quot;start&quot;},{defaultToken:&quot;comment&quot;,caseInsensitive:!0}],line_comment:[i.getTagRule(),{token:&quot;comment&quot;,regex:&quot;$|^&quot;,next:&quot;no_regex&quot;},{defaultToken:&quot;comment&quot;,caseInsensitive:!0}],qqstring:[{token:&quot;constant.language.escape&quot;,regex:r},{token:&quot;string&quot;,regex:&quot;\\\\$&quot;,next:&quot;qqstring&quot;},{token:&quot;string&quot;,regex:&#39;&quot;|$&#39;,next:&quot;no_regex&quot;},{defaultToken:&quot;string&quot;}],qstring:[{token:&quot;constant.language.escape&quot;,regex:r},{token:&quot;string&quot;,regex:&quot;\\\\$&quot;,next:&quot;qstring&quot;},{token:&quot;string&quot;,regex:&quot;&#39;|$&quot;,next:&quot;no_regex&quot;},{defaultToken:&quot;string&quot;}]};if(!e||!e.noES6)this.$rules.no_regex.unshift({regex:&quot;[{}]&quot;,onMatch:function(e,t,n){this.next=e==&quot;{&quot;?this.nextState:&quot;&quot;;if(e==&quot;{&quot;&amp;&amp;n.length)return n.unshift(&quot;start&quot;,t),&quot;paren&quot;;if(e==&quot;}&quot;&amp;&amp;n.length){n.shift(),this.next=n.shift();if(this.next.indexOf(&quot;string&quot;)!=-1||this.next.indexOf(&quot;jsx&quot;)!=-1)return&quot;paren.quasi.end&quot;}return e==&quot;{&quot;?&quot;paren.lparen&quot;:&quot;paren.rparen&quot;},nextState:&quot;start&quot;},{token:&quot;string.quasi.start&quot;,regex:/`/,push:[{token:&quot;constant.language.escape&quot;,regex:r},{token:&quot;paren.quasi.start&quot;,regex:/\${/,push:&quot;start&quot;},{token:&quot;string.quasi.end&quot;,regex:/`/,next:&quot;pop&quot;},{defaultToken:&quot;string.quasi&quot;}]}),(!e||!e.noJSX)&amp;&amp;a.call(this);this.embedRules(i,&quot;doc-&quot;,[i.getEndRule(&quot;no_regex&quot;)]),this.normalizeRules()};r.inherits(u,s),t.JavaScriptHighlightRules=u}),ace.define(&quot;ace/mode/matching_brace_outdent&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/range&quot;],function(e,t,n){&quot;use strict&quot;;var r=e(&quot;../range&quot;).Range,i=function(){};(function(){this.checkOutdent=function(e,t){return/^\s+$/.test(e)?/^\s*\}/.test(t):!1},this.autoOutdent=function(e,t){var n=e.getLine(t),i=n.match(/^(\s*\})/);if(!i)return 0;var s=i[1].length,o=e.findMatchingBracket({row:t,column:s});if(!o||o.row==t)return 0;var u=this.$getIndent(e.getLine(o.row));e.replace(new r(t,0,t,s-1),u)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(i.prototype),t.MatchingBraceOutdent=i}),ace.define(&quot;ace/mode/behaviour/cstyle&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/mode/behaviour&quot;,&quot;ace/token_iterator&quot;,&quot;ace/lib/lang&quot;],function(e,t,n){&quot;use strict&quot;;var r=e(&quot;../../lib/oop&quot;),i=e(&quot;../behaviour&quot;).Behaviour,s=e(&quot;../../token_iterator&quot;).TokenIterator,o=e(&quot;../../lib/lang&quot;),u=[&quot;text&quot;,&quot;paren.rparen&quot;,&quot;punctuation.operator&quot;],a=[&quot;text&quot;,&quot;paren.rparen&quot;,&quot;punctuation.operator&quot;,&quot;comment&quot;],f,l={},c=function(e){var t=-1;e.multiSelect&amp;&amp;(t=e.selection.index,l.rangeCount!=e.multiSelect.rangeCount&amp;&amp;(l={rangeCount:e.multiSelect.rangeCount}));if(l[t])return f=l[t];f=l[t]={autoInsertedBrackets:0,autoInsertedRow:-1,autoInsertedLineEnd:&quot;&quot;,maybeInsertedBrackets:0,maybeInsertedRow:-1,maybeInsertedLineStart:&quot;&quot;,maybeInsertedLineEnd:&quot;&quot;}},h=function(e,t,n,r){var i=e.end.row-e.start.row;return{text:n+t+r,selection:[0,e.start.column+1,i,e.end.column+(i?0:1)]}},p=function(){this.add(&quot;braces&quot;,&quot;insertion&quot;,function(e,t,n,r,i){var s=n.getCursorPosition(),u=r.doc.getLine(s.row);if(i==&quot;{&quot;){c(n);var a=n.getSelectionRange(),l=r.doc.getTextRange(a);if(l!==&quot;&quot;&amp;&amp;l!==&quot;{&quot;&amp;&amp;n.getWrapBehavioursEnabled())return h(a,l,&quot;{&quot;,&quot;}&quot;);if(p.isSaneInsertion(n,r))return/[\]\}\)]/.test(u[s.column])||n.inMultiSelectMode?(p.recordAutoInsert(n,r,&quot;}&quot;),{text:&quot;{}&quot;,selection:[1,1]}):(p.recordMaybeInsert(n,r,&quot;{&quot;),{text:&quot;{&quot;,selection:[1,1]})}else if(i==&quot;}&quot;){c(n);var d=u.substring(s.column,s.column+1);if(d==&quot;}&quot;){var v=r.$findOpeningBracket(&quot;}&quot;,{column:s.column+1,row:s.row});if(v!==null&amp;&amp;p.isAutoInsertedClosing(s,u,i))return p.popAutoInsertedClosing(),{text:&quot;&quot;,selection:[1,1]}}}else{if(i==&quot;\n&quot;||i==&quot;\r\n&quot;){c(n);var m=&quot;&quot;;p.isMaybeInsertedClosing(s,u)&amp;&amp;(m=o.stringRepeat(&quot;}&quot;,f.maybeInsertedBrackets),p.clearMaybeInsertedClosing());var d=u.substring(s.column,s.column+1);if(d===&quot;}&quot;){var g=r.findMatchingBracket({row:s.row,column:s.column+1},&quot;}&quot;);if(!g)return null;var y=this.$getIndent(r.getLine(g.row))}else{if(!m){p.clearMaybeInsertedClosing();return}var y=this.$getIndent(u)}var b=y+r.getTabString();return{text:&quot;\n&quot;+b+&quot;\n&quot;+y+m,selection:[1,b.length,1,b.length]}}p.clearMaybeInsertedClosing()}}),this.add(&quot;braces&quot;,&quot;deletion&quot;,function(e,t,n,r,i){var s=r.doc.getTextRange(i);if(!i.isMultiLine()&amp;&amp;s==&quot;{&quot;){c(n);var o=r.doc.getLine(i.start.row),u=o.substring(i.end.column,i.end.column+1);if(u==&quot;}&quot;)return i.end.column++,i;f.maybeInsertedBrackets--}}),this.add(&quot;parens&quot;,&quot;insertion&quot;,function(e,t,n,r,i){if(i==&quot;(&quot;){c(n);var s=n.getSelectionRange(),o=r.doc.getTextRange(s);if(o!==&quot;&quot;&amp;&amp;n.getWrapBehavioursEnabled())return h(s,o,&quot;(&quot;,&quot;)&quot;);if(p.isSaneInsertion(n,r))return p.recordAutoInsert(n,r,&quot;)&quot;),{text:&quot;()&quot;,selection:[1,1]}}else if(i==&quot;)&quot;){c(n);var u=n.getCursorPosition(),a=r.doc.getLine(u.row),f=a.substring(u.column,u.column+1);if(f==&quot;)&quot;){var l=r.$findOpeningBracket(&quot;)&quot;,{column:u.column+1,row:u.row});if(l!==null&amp;&amp;p.isAutoInsertedClosing(u,a,i))return p.popAutoInsertedClosing(),{text:&quot;&quot;,selection:[1,1]}}}}),this.add(&quot;parens&quot;,&quot;deletion&quot;,function(e,t,n,r,i){var s=r.doc.getTextRange(i);if(!i.isMultiLine()&amp;&amp;s==&quot;(&quot;){c(n);var o=r.doc.getLine(i.start.row),u=o.substring(i.start.column+1,i.start.column+2);if(u==&quot;)&quot;)return i.end.column++,i}}),this.add(&quot;brackets&quot;,&quot;insertion&quot;,function(e,t,n,r,i){if(i==&quot;[&quot;){c(n);var s=n.getSelectionRange(),o=r.doc.getTextRange(s);if(o!==&quot;&quot;&amp;&amp;n.getWrapBehavioursEnabled())return h(s,o,&quot;[&quot;,&quot;]&quot;);if(p.isSaneInsertion(n,r))return p.recordAutoInsert(n,r,&quot;]&quot;),{text:&quot;[]&quot;,selection:[1,1]}}else if(i==&quot;]&quot;){c(n);var u=n.getCursorPosition(),a=r.doc.getLine(u.row),f=a.substring(u.column,u.column+1);if(f==&quot;]&quot;){var l=r.$findOpeningBracket(&quot;]&quot;,{column:u.column+1,row:u.row});if(l!==null&amp;&amp;p.isAutoInsertedClosing(u,a,i))return p.popAutoInsertedClosing(),{text:&quot;&quot;,selection:[1,1]}}}}),this.add(&quot;brackets&quot;,&quot;deletion&quot;,function(e,t,n,r,i){var s=r.doc.getTextRange(i);if(!i.isMultiLine()&amp;&amp;s==&quot;[&quot;){c(n);var o=r.doc.getLine(i.start.row),u=o.substring(i.start.column+1,i.start.column+2);if(u==&quot;]&quot;)return i.end.column++,i}}),this.add(&quot;string_dquotes&quot;,&quot;insertion&quot;,function(e,t,n,r,i){if(i==&#39;&quot;&#39;||i==&quot;&#39;&quot;){c(n);var s=i,o=n.getSelectionRange(),u=r.doc.getTextRange(o);if(u!==&quot;&quot;&amp;&amp;u!==&quot;&#39;&quot;&amp;&amp;u!=&#39;&quot;&#39;&amp;&amp;n.getWrapBehavioursEnabled())return h(o,u,s,s);if(!u){var a=n.getCursorPosition(),f=r.doc.getLine(a.row),l=f.substring(a.column-1,a.column),p=f.substring(a.column,a.column+1),d=r.getTokenAt(a.row,a.column),v=r.getTokenAt(a.row,a.column+1);if(l==&quot;\\&quot;&amp;&amp;d&amp;&amp;/escape/.test(d.type))return null;var m=d&amp;&amp;/string|escape/.test(d.type),g=!v||/string|escape/.test(v.type),y;if(p==s)y=m!==g;else{if(m&amp;&amp;!g)return null;if(m&amp;&amp;g)return null;var b=r.$mode.tokenRe;b.lastIndex=0;var w=b.test(l);b.lastIndex=0;var E=b.test(l);if(w||E)return null;if(p&amp;&amp;!/[\s;,.})\]\\]/.test(p))return null;y=!0}return{text:y?s+s:&quot;&quot;,selection:[1,1]}}}}),this.add(&quot;string_dquotes&quot;,&quot;deletion&quot;,function(e,t,n,r,i){var s=r.doc.getTextRange(i);if(!i.isMultiLine()&amp;&amp;(s==&#39;&quot;&#39;||s==&quot;&#39;&quot;)){c(n);var o=r.doc.getLine(i.start.row),u=o.substring(i.start.column+1,i.start.column+2);if(u==s)return i.end.column++,i}})};p.isSaneInsertion=function(e,t){var n=e.getCursorPosition(),r=new s(t,n.row,n.column);if(!this.$matchTokenType(r.getCurrentToken()||&quot;text&quot;,u)){var i=new s(t,n.row,n.column+1);if(!this.$matchTokenType(i.getCurrentToken()||&quot;text&quot;,u))return!1}return r.stepForward(),r.getCurrentTokenRow()!==n.row||this.$matchTokenType(r.getCurrentToken()||&quot;text&quot;,a)},p.$matchTokenType=function(e,t){return t.indexOf(e.type||e)&gt;-1},p.recordAutoInsert=function(e,t,n){var r=e.getCursorPosition(),i=t.doc.getLine(r.row);this.isAutoInsertedClosing(r,i,f.autoInsertedLineEnd[0])||(f.autoInsertedBrackets=0),f.autoInsertedRow=r.row,f.autoInsertedLineEnd=n+i.substr(r.column),f.autoInsertedBrackets++},p.recordMaybeInsert=function(e,t,n){var r=e.getCursorPosition(),i=t.doc.getLine(r.row);this.isMaybeInsertedClosing(r,i)||(f.maybeInsertedBrackets=0),f.maybeInsertedRow=r.row,f.maybeInsertedLineStart=i.substr(0,r.column)+n,f.maybeInsertedLineEnd=i.substr(r.column),f.maybeInsertedBrackets++},p.isAutoInsertedClosing=function(e,t,n){return f.autoInsertedBrackets&gt;0&amp;&amp;e.row===f.autoInsertedRow&amp;&amp;n===f.autoInsertedLineEnd[0]&amp;&amp;t.substr(e.column)===f.autoInsertedLineEnd},p.isMaybeInsertedClosing=function(e,t){return f.maybeInsertedBrackets&gt;0&amp;&amp;e.row===f.maybeInsertedRow&amp;&amp;t.substr(e.column)===f.maybeInsertedLineEnd&amp;&amp;t.substr(0,e.column)==f.maybeInsertedLineStart},p.popAutoInsertedClosing=function(){f.autoInsertedLineEnd=f.autoInsertedLineEnd.substr(1),f.autoInsertedBrackets--},p.clearMaybeInsertedClosing=function(){f&amp;&amp;(f.maybeInsertedBrackets=0,f.maybeInsertedRow=-1)},r.inherits(p,i),t.CstyleBehaviour=p}),ace.define(&quot;ace/mode/folding/cstyle&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/range&quot;,&quot;ace/mode/folding/fold_mode&quot;],function(e,t,n){&quot;use strict&quot;;var r=e(&quot;../../lib/oop&quot;),i=e(&quot;../../range&quot;).Range,s=e(&quot;./fold_mode&quot;).FoldMode,o=t.FoldMode=function(e){e&amp;&amp;(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,&quot;|&quot;+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,&quot;|&quot;+e.end)))};r.inherits(o,s),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var r=e.getLine(n);if(this.singleLineBlockCommentRe.test(r)&amp;&amp;!this.startRegionRe.test(r)&amp;&amp;!this.tripleStarBlockCommentRe.test(r))return&quot;&quot;;var i=this._getFoldWidgetBase(e,t,n);return!i&amp;&amp;this.startRegionRe.test(r)?&quot;start&quot;:i},this.getFoldWidgetRange=function(e,t,n,r){var i=e.getLine(n);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(e,i,n);var s=i.match(this.foldingStartMarker);if(s){var o=s.index;if(s[1])return this.openingBracketBlock(e,s[1],n,o);var u=e.getCommentFoldRange(n,o+s[0].length,1);return u&amp;&amp;!u.isMultiLine()&amp;&amp;(r?u=this.getSectionRange(e,n):t!=&quot;all&quot;&amp;&amp;(u=null)),u}if(t===&quot;markbegin&quot;)return;var s=i.match(this.foldingStopMarker);if(s){var o=s.index+s[0].length;return s[1]?this.closingBracketBlock(e,s[1],n,o):e.getCommentFoldRange(n,o,-1)}},this.getSectionRange=function(e,t){var n=e.getLine(t),r=n.search(/\S/),s=t,o=n.length;t+=1;var u=t,a=e.getLength();while(++t&lt;a){n=e.getLine(t);var f=n.search(/\S/);if(f===-1)continue;if(r&gt;f)break;var l=this.getFoldWidgetRange(e,&quot;all&quot;,t);if(l){if(l.start.row&lt;=s)break;if(l.isMultiLine())t=l.end.row;else if(r==f)break}u=t}return new i(s,o,u,e.getLine(u).length)},this.getCommentRegionBlock=function(e,t,n){var r=t.search(/\s*$/),s=e.getLength(),o=n,u=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,a=1;while(++n&lt;s){t=e.getLine(n);var f=u.exec(t);if(!f)continue;f[1]?a--:a++;if(!a)break}var l=n;if(l&gt;o)return new i(o,r,l,t.length)}}.call(o.prototype)}),ace.define(&quot;ace/mode/javascript&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/mode/text&quot;,&quot;ace/mode/javascript_highlight_rules&quot;,&quot;ace/mode/matching_brace_outdent&quot;,&quot;ace/range&quot;,&quot;ace/worker/worker_client&quot;,&quot;ace/mode/behaviour/cstyle&quot;,&quot;ace/mode/folding/cstyle&quot;],function(e,t,n){&quot;use strict&quot;;var r=e(&quot;../lib/oop&quot;),i=e(&quot;./text&quot;).Mode,s=e(&quot;./javascript_highlight_rules&quot;).JavaScriptHighlightRules,o=e(&quot;./matching_brace_outdent&quot;).MatchingBraceOutdent,u=e(&quot;../range&quot;).Range,a=e(&quot;../worker/worker_client&quot;).WorkerClient,f=e(&quot;./behaviour/cstyle&quot;).CstyleBehaviour,l=e(&quot;./folding/cstyle&quot;).FoldMode,c=function(){this.HighlightRules=s,this.$outdent=new o,this.$behaviour=new f,this.foldingRules=new l};r.inherits(c,i),function(){this.lineCommentStart=&quot;//&quot;,this.blockComment={start:&quot;/*&quot;,end:&quot;*/&quot;},this.getNextLineIndent=function(e,t,n){var r=this.$getIndent(t),i=this.getTokenizer().getLineTokens(t,e),s=i.tokens,o=i.state;if(s.length&amp;&amp;s[s.length-1].type==&quot;comment&quot;)return r;if(e==&quot;start&quot;||e==&quot;no_regex&quot;){var u=t.match(/^.*(?:\bcase\b.*\:|[\{\(\[])\s*$/);u&amp;&amp;(r+=n)}else if(e==&quot;doc-start&quot;){if(o==&quot;start&quot;||o==&quot;no_regex&quot;)return&quot;&quot;;var u=t.match(/^\s*(\/?)\*/);u&amp;&amp;(u[1]&amp;&amp;(r+=&quot; &quot;),r+=&quot;* &quot;)}return r},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.createWorker=function(e){var t=new a([&quot;ace&quot;],&quot;ace/mode/javascript_worker&quot;,&quot;JavaScriptWorker&quot;);return t.attachToDocument(e.getDocument()),t.on(&quot;annotate&quot;,function(t){e.setAnnotations(t.data)}),t.on(&quot;terminate&quot;,function(){e.clearAnnotations()}),t},this.$id=&quot;ace/mode/javascript&quot;}.call(c.prototype),t.Mode=c}),ace.define(&quot;ace/mode/css_highlight_rules&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/lib/lang&quot;,&quot;ace/mode/text_highlight_rules&quot;],function(e,t,n){&quot;use strict&quot;;var r=e(&quot;../lib/oop&quot;),i=e(&quot;../lib/lang&quot;),s=e(&quot;./text_highlight_rules&quot;).TextHighlightRules,o=t.supportType=&quot;animation-fill-mode|alignment-adjust|alignment-baseline|animation-delay|animation-direction|animation-duration|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|animation|appearance|azimuth|backface-visibility|background-attachment|background-break|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|background|baseline-shift|binding|bleed|bookmark-label|bookmark-level|bookmark-state|bookmark-target|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|border|bottom|box-align|box-decoration-break|box-direction|box-flex-group|box-flex|box-lines|box-ordinal-group|box-orient|box-pack|box-shadow|box-sizing|break-after|break-before|break-inside|caption-side|clear|clip|color-profile|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|crop|cue-after|cue-before|cue|cursor|direction|display|dominant-baseline|drop-initial-after-adjust|drop-initial-after-align|drop-initial-before-adjust|drop-initial-before-align|drop-initial-size|drop-initial-value|elevation|empty-cells|fit|fit-position|float-offset|float|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|font|grid-columns|grid-rows|hanging-punctuation|height|hyphenate-after|hyphenate-before|hyphenate-character|hyphenate-lines|hyphenate-resource|hyphens|icon|image-orientation|image-rendering|image-resolution|inline-box-align|left|letter-spacing|line-height|line-stacking-ruby|line-stacking-shift|line-stacking-strategy|line-stacking|list-style-image|list-style-position|list-style-type|list-style|margin-bottom|margin-left|margin-right|margin-top|margin|mark-after|mark-before|mark|marks|marquee-direction|marquee-play-count|marquee-speed|marquee-style|max-height|max-width|min-height|min-width|move-to|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|orphans|outline-color|outline-offset|outline-style|outline-width|outline|overflow-style|overflow-x|overflow-y|overflow|padding-bottom|padding-left|padding-right|padding-top|padding|page-break-after|page-break-before|page-break-inside|page-policy|page|pause-after|pause-before|pause|perspective-origin|perspective|phonemes|pitch-range|pitch|play-during|pointer-events|position|presentation-level|punctuation-trim|quotes|rendering-intent|resize|rest-after|rest-before|rest|richness|right|rotation-point|rotation|ruby-align|ruby-overhang|ruby-position|ruby-span|size|speak-header|speak-numeral|speak-punctuation|speak|speech-rate|stress|string-set|table-layout|target-name|target-new|target-position|target|text-align-last|text-align|text-decoration|text-emphasis|text-height|text-indent|text-justify|text-outline|text-shadow|text-transform|text-wrap|top|transform-origin|transform-style|transform|transition-delay|transition-duration|transition-property|transition-timing-function|transition|unicode-bidi|vertical-align|visibility|voice-balance|voice-duration|voice-family|voice-pitch-range|voice-pitch|voice-rate|voice-stress|voice-volume|volume|white-space-collapse|white-space|widows|width|word-break|word-spacing|word-wrap|z-index&quot;,u=t.supportFunction=&quot;rgb|rgba|url|attr|counter|counters&quot;,a=t.supportConstant=&quot;absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero&quot;,f=t.supportConstantColor=&quot;aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow&quot;,l=t.supportConstantFonts=&quot;arial|century|comic|courier|cursive|fantasy|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace&quot;,c=t.numRe=&quot;\\-?(?:(?:[0-9]+)|(?:[0-9]*\\.[0-9]+))&quot;,h=t.pseudoElements=&quot;(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b&quot;,p=t.pseudoClasses=&quot;(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|required|root|target|valid|visited)\\b&quot;,d=function(){var e=this.createKeywordMapper({&quot;support.function&quot;:u,&quot;support.constant&quot;:a,&quot;support.type&quot;:o,&quot;support.constant.color&quot;:f,&quot;support.constant.fonts&quot;:l},&quot;text&quot;,!0);this.$rules={start:[{token:&quot;comment&quot;,regex:&quot;\\/\\*&quot;,push:&quot;comment&quot;},{token:&quot;paren.lparen&quot;,regex:&quot;\\{&quot;,push:&quot;ruleset&quot;},{token:&quot;string&quot;,regex:&quot;@.*?{&quot;,push:&quot;media&quot;},{token:&quot;keyword&quot;,regex:&quot;#[a-z0-9-_]+&quot;},{token:&quot;variable&quot;,regex:&quot;\\.[a-z0-9-_]+&quot;},{token:&quot;string&quot;,regex:&quot;:[a-z0-9-_]+&quot;},{token:&quot;constant&quot;,regex:&quot;[a-z0-9-_]+&quot;},{caseInsensitive:!0}],media:[{token:&quot;comment&quot;,regex:&quot;\\/\\*&quot;,push:&quot;comment&quot;},{token:&quot;paren.lparen&quot;,regex:&quot;\\{&quot;,push:&quot;ruleset&quot;},{token:&quot;string&quot;,regex:&quot;\\}&quot;,next:&quot;pop&quot;},{token:&quot;keyword&quot;,regex:&quot;#[a-z0-9-_]+&quot;},{token:&quot;variable&quot;,regex:&quot;\\.[a-z0-9-_]+&quot;},{token:&quot;string&quot;,regex:&quot;:[a-z0-9-_]+&quot;},{token:&quot;constant&quot;,regex:&quot;[a-z0-9-_]+&quot;},{caseInsensitive:!0}],comment:[{token:&quot;comment&quot;,regex:&quot;\\*\\/&quot;,next:&quot;pop&quot;},{defaultToken:&quot;comment&quot;}],ruleset:[{token:&quot;paren.rparen&quot;,regex:&quot;\\}&quot;,next:&quot;pop&quot;},{token:&quot;comment&quot;,regex:&quot;\\/\\*&quot;,push:&quot;comment&quot;},{token:&quot;string&quot;,regex:&#39;[&quot;](?:(?:\\\\.)|(?:[^&quot;\\\\]))*?[&quot;]&#39;},{token:&quot;string&quot;,regex:&quot;[&#39;](?:(?:\\\\.)|(?:[^&#39;\\\\]))*?[&#39;]&quot;},{token:[&quot;constant.numeric&quot;,&quot;keyword&quot;],regex:&quot;(&quot;+c+&quot;)(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vm|vw|%)&quot;},{token:&quot;constant.numeric&quot;,regex:c},{token:&quot;constant.numeric&quot;,regex:&quot;#[a-f0-9]{6}&quot;},{token:&quot;constant.numeric&quot;,regex:&quot;#[a-f0-9]{3}&quot;},{token:[&quot;punctuation&quot;,&quot;entity.other.attribute-name.pseudo-element.css&quot;],regex:h},{token:[&quot;punctuation&quot;,&quot;entity.other.attribute-name.pseudo-class.css&quot;],regex:p},{token:[&quot;support.function&quot;,&quot;string&quot;,&quot;support.function&quot;],regex:&quot;(url\\()(.*)(\\))&quot;},{token:e,regex:&quot;\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*&quot;},{caseInsensitive:!0}]},this.normalizeRules()};r.inherits(d,s),t.CssHighlightRules=d}),ace.define(&quot;ace/mode/css_completions&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;],function(e,t,n){&quot;use strict&quot;;var r={background:{&quot;#$0&quot;:1},&quot;background-color&quot;:{&quot;#$0&quot;:1,transparent:1,fixed:1},&quot;background-image&quot;:{&quot;url(&#39;/$0&#39;)&quot;:1},&quot;background-repeat&quot;:{repeat:1,&quot;repeat-x&quot;:1,&quot;repeat-y&quot;:1,&quot;no-repeat&quot;:1,inherit:1},&quot;background-position&quot;:{bottom:2,center:2,left:2,right:2,top:2,inherit:2},&quot;background-attachment&quot;:{scroll:1,fixed:1},&quot;background-size&quot;:{cover:1,contain:1},&quot;background-clip&quot;:{&quot;border-box&quot;:1,&quot;padding-box&quot;:1,&quot;content-box&quot;:1},&quot;background-origin&quot;:{&quot;border-box&quot;:1,&quot;padding-box&quot;:1,&quot;content-box&quot;:1},border:{&quot;solid $0&quot;:1,&quot;dashed $0&quot;:1,&quot;dotted $0&quot;:1,&quot;#$0&quot;:1},&quot;border-color&quot;:{&quot;#$0&quot;:1},&quot;border-style&quot;:{solid:2,dashed:2,dotted:2,&quot;double&quot;:2,groove:2,hidden:2,inherit:2,inset:2,none:2,outset:2,ridged:2},&quot;border-collapse&quot;:{collapse:1,separate:1},bottom:{px:1,em:1,&quot;%&quot;:1},clear:{left:1,right:1,both:1,none:1},color:{&quot;#$0&quot;:1,&quot;rgb(#$00,0,0)&quot;:1},cursor:{&quot;default&quot;:1,pointer:1,move:1,text:1,wait:1,help:1,progress:1,&quot;n-resize&quot;:1,&quot;ne-resize&quot;:1,&quot;e-resize&quot;:1,&quot;se-resize&quot;:1,&quot;s-resize&quot;:1,&quot;sw-resize&quot;:1,&quot;w-resize&quot;:1,&quot;nw-resize&quot;:1},display:{none:1,block:1,inline:1,&quot;inline-block&quot;:1,&quot;table-cell&quot;:1},&quot;empty-cells&quot;:{show:1,hide:1},&quot;float&quot;:{left:1,right:1,none:1},&quot;font-family&quot;:{Arial:2,&quot;Comic Sans MS&quot;:2,Consolas:2,&quot;Courier New&quot;:2,Courier:2,Georgia:2,Monospace:2,&quot;Sans-Serif&quot;:2,&quot;Segoe UI&quot;:2,Tahoma:2,&quot;Times New Roman&quot;:2,&quot;Trebuchet MS&quot;:2,Verdana:1},&quot;font-size&quot;:{px:1,em:1,&quot;%&quot;:1},&quot;font-weight&quot;:{bold:1,normal:1},&quot;font-style&quot;:{italic:1,normal:1},&quot;font-variant&quot;:{normal:1,&quot;small-caps&quot;:1},height:{px:1,em:1,&quot;%&quot;:1},left:{px:1,em:1,&quot;%&quot;:1},&quot;letter-spacing&quot;:{normal:1},&quot;line-height&quot;:{normal:1},&quot;list-style-type&quot;:{none:1,disc:1,circle:1,square:1,decimal:1,&quot;decimal-leading-zero&quot;:1,&quot;lower-roman&quot;:1,&quot;upper-roman&quot;:1,&quot;lower-greek&quot;:1,&quot;lower-latin&quot;:1,&quot;upper-latin&quot;:1,georgian:1,&quot;lower-alpha&quot;:1,&quot;upper-alpha&quot;:1},margin:{px:1,em:1,&quot;%&quot;:1},&quot;margin-right&quot;:{px:1,em:1,&quot;%&quot;:1},&quot;margin-left&quot;:{px:1,em:1,&quot;%&quot;:1},&quot;margin-top&quot;:{px:1,em:1,&quot;%&quot;:1},&quot;margin-bottom&quot;:{px:1,em:1,&quot;%&quot;:1},&quot;max-height&quot;:{px:1,em:1,&quot;%&quot;:1},&quot;max-width&quot;:{px:1,em:1,&quot;%&quot;:1},&quot;min-height&quot;:{px:1,em:1,&quot;%&quot;:1},&quot;min-width&quot;:{px:1,em:1,&quot;%&quot;:1},overflow:{hidden:1,visible:1,auto:1,scroll:1},&quot;overflow-x&quot;:{hidden:1,visible:1,auto:1,scroll:1},&quot;overflow-y&quot;:{hidden:1,visible:1,auto:1,scroll:1},padding:{px:1,em:1,&quot;%&quot;:1},&quot;padding-top&quot;:{px:1,em:1,&quot;%&quot;:1},&quot;padding-right&quot;:{px:1,em:1,&quot;%&quot;:1},&quot;padding-bottom&quot;:{px:1,em:1,&quot;%&quot;:1},&quot;padding-left&quot;:{px:1,em:1,&quot;%&quot;:1},&quot;page-break-after&quot;:{auto:1,always:1,avoid:1,left:1,right:1},&quot;page-break-before&quot;:{auto:1,always:1,avoid:1,left:1,right:1},position:{absolute:1,relative:1,fixed:1,&quot;static&quot;:1},right:{px:1,em:1,&quot;%&quot;:1},&quot;table-layout&quot;:{fixed:1,auto:1},&quot;text-decoration&quot;:{none:1,underline:1,&quot;line-through&quot;:1,blink:1},&quot;text-align&quot;:{left:1,right:1,center:1,justify:1},&quot;text-transform&quot;:{capitalize:1,uppercase:1,lowercase:1,none:1},top:{px:1,em:1,&quot;%&quot;:1},&quot;vertical-align&quot;:{top:1,bottom:1},visibility:{hidden:1,visible:1},&quot;white-space&quot;:{nowrap:1,normal:1,pre:1,&quot;pre-line&quot;:1,&quot;pre-wrap&quot;:1},width:{px:1,em:1,&quot;%&quot;:1},&quot;word-spacing&quot;:{normal:1},filter:{&quot;alpha(opacity=$0100)&quot;:1},&quot;text-shadow&quot;:{&quot;$02px 2px 2px #777&quot;:1},&quot;text-overflow&quot;:{&quot;ellipsis-word&quot;:1,clip:1,ellipsis:1},&quot;-moz-border-radius&quot;:1,&quot;-moz-border-radius-topright&quot;:1,&quot;-moz-border-radius-bottomright&quot;:1,&quot;-moz-border-radius-topleft&quot;:1,&quot;-moz-border-radius-bottomleft&quot;:1,&quot;-webkit-border-radius&quot;:1,&quot;-webkit-border-top-right-radius&quot;:1,&quot;-webkit-border-top-left-radius&quot;:1,&quot;-webkit-border-bottom-right-radius&quot;:1,&quot;-webkit-border-bottom-left-radius&quot;:1,&quot;-moz-box-shadow&quot;:1,&quot;-webkit-box-shadow&quot;:1,transform:{&quot;rotate($00deg)&quot;:1,&quot;skew($00deg)&quot;:1},&quot;-moz-transform&quot;:{&quot;rotate($00deg)&quot;:1,&quot;skew($00deg)&quot;:1},&quot;-webkit-transform&quot;:{&quot;rotate($00deg)&quot;:1,&quot;skew($00deg)&quot;:1}},i=function(){};(function(){this.completionsDefined=!1,this.defineCompletions=function(){if(document){var e=document.createElement(&quot;c&quot;).style;for(var t in e){if(typeof e[t]!=&quot;string&quot;)continue;var n=t.replace(/[A-Z]/g,function(e){return&quot;-&quot;+e.toLowerCase()});r.hasOwnProperty(n)||(r[n]=1)}}this.completionsDefined=!0},this.getCompletions=function(e,t,n,r){this.completionsDefined||this.defineCompletions();var i=t.getTokenAt(n.row,n.column);if(!i)return[];if(e===&quot;ruleset&quot;){var s=t.getLine(n.row).substr(0,n.column);return/:[^;]+$/.test(s)?(/([\w\-]+):[^:]*$/.test(s),this.getPropertyValueCompletions(e,t,n,r)):this.getPropertyCompletions(e,t,n,r)}return[]},this.getPropertyCompletions=function(e,t,n,i){var s=Object.keys(r);return s.map(function(e){return{caption:e,snippet:e+&quot;: $0&quot;,meta:&quot;property&quot;,score:Number.MAX_VALUE}})},this.getPropertyValueCompletions=function(e,t,n,i){var s=t.getLine(n.row).substr(0,n.column),o=(/([\w\-]+):[^:]*$/.exec(s)||{})[1];if(!o)return[];var u=[];return o in r&amp;&amp;typeof r[o]==&quot;object&quot;&amp;&amp;(u=Object.keys(r[o])),u.map(function(e){return{caption:e,snippet:e,meta:&quot;property value&quot;,score:Number.MAX_VALUE}})}}).call(i.prototype),t.CssCompletions=i}),ace.define(&quot;ace/mode/behaviour/css&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/mode/behaviour&quot;,&quot;ace/mode/behaviour/cstyle&quot;,&quot;ace/token_iterator&quot;],function(e,t,n){&quot;use strict&quot;;var r=e(&quot;../../lib/oop&quot;),i=e(&quot;../behaviour&quot;).Behaviour,s=e(&quot;./cstyle&quot;).CstyleBehaviour,o=e(&quot;../../token_iterator&quot;).TokenIterator,u=function(){this.inherit(s),this.add(&quot;colon&quot;,&quot;insertion&quot;,function(e,t,n,r,i){if(i===&quot;:&quot;){var s=n.getCursorPosition(),u=new o(r,s.row,s.column),a=u.getCurrentToken();a&amp;&amp;a.value.match(/\s+/)&amp;&amp;(a=u.stepBackward());if(a&amp;&amp;a.type===&quot;support.type&quot;){var f=r.doc.getLine(s.row),l=f.substring(s.column,s.column+1);if(l===&quot;:&quot;)return{text:&quot;&quot;,selection:[1,1]};if(!f.substring(s.column).match(/^\s*;/))return{text:&quot;:;&quot;,selection:[1,1]}}}}),this.add(&quot;colon&quot;,&quot;deletion&quot;,function(e,t,n,r,i){var s=r.doc.getTextRange(i);if(!i.isMultiLine()&amp;&amp;s===&quot;:&quot;){var u=n.getCursorPosition(),a=new o(r,u.row,u.column),f=a.getCurrentToken();f&amp;&amp;f.value.match(/\s+/)&amp;&amp;(f=a.stepBackward());if(f&amp;&amp;f.type===&quot;support.type&quot;){var l=r.doc.getLine(i.start.row),c=l.substring(i.end.column,i.end.column+1);if(c===&quot;;&quot;)return i.end.column++,i}}}),this.add(&quot;semicolon&quot;,&quot;insertion&quot;,function(e,t,n,r,i){if(i===&quot;;&quot;){var s=n.getCursorPosition(),o=r.doc.getLine(s.row),u=o.substring(s.column,s.column+1);if(u===&quot;;&quot;)return{text:&quot;&quot;,selection:[1,1]}}})};r.inherits(u,s),t.CssBehaviour=u}),ace.define(&quot;ace/mode/css&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/mode/text&quot;,&quot;ace/mode/css_highlight_rules&quot;,&quot;ace/mode/matching_brace_outdent&quot;,&quot;ace/worker/worker_client&quot;,&quot;ace/mode/css_completions&quot;,&quot;ace/mode/behaviour/css&quot;,&quot;ace/mode/folding/cstyle&quot;],function(e,t,n){&quot;use strict&quot;;var r=e(&quot;../lib/oop&quot;),i=e(&quot;./text&quot;).Mode,s=e(&quot;./css_highlight_rules&quot;).CssHighlightRules,o=e(&quot;./matching_brace_outdent&quot;).MatchingBraceOutdent,u=e(&quot;../worker/worker_client&quot;).WorkerClient,a=e(&quot;./css_completions&quot;).CssCompletions,f=e(&quot;./behaviour/css&quot;).CssBehaviour,l=e(&quot;./folding/cstyle&quot;).FoldMode,c=function(){this.HighlightRules=s,this.$outdent=new o,this.$behaviour=new f,this.$completer=new a,this.foldingRules=new l};r.inherits(c,i),function(){this.foldingRules=&quot;cStyle&quot;,this.blockComment={start:&quot;/*&quot;,end:&quot;*/&quot;},this.getNextLineIndent=function(e,t,n){var r=this.$getIndent(t),i=this.getTokenizer().getLineTokens(t,e).tokens;if(i.length&amp;&amp;i[i.length-1].type==&quot;comment&quot;)return r;var s=t.match(/^.*\{\s*$/);return s&amp;&amp;(r+=n),r},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.getCompletions=function(e,t,n,r){return this.$completer.getCompletions(e,t,n,r)},this.createWorker=function(e){var t=new u([&quot;ace&quot;],&quot;ace/mode/css_worker&quot;,&quot;Worker&quot;);return t.attachToDocument(e.getDocument()),t.on(&quot;annotate&quot;,function(t){e.setAnnotations(t.data)}),t.on(&quot;terminate&quot;,function(){e.clearAnnotations()}),t},this.$id=&quot;ace/mode/css&quot;}.call(c.prototype),t.Mode=c}),ace.define(&quot;ace/mode/xml_highlight_rules&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/mode/text_highlight_rules&quot;],function(e,t,n){&quot;use strict&quot;;var r=e(&quot;../lib/oop&quot;),i=e(&quot;./text_highlight_rules&quot;).TextHighlightRules,s=function(e){var t=&quot;[_:a-zA-Z\u00c0-\uffff][-_:.a-zA-Z0-9\u00c0-\uffff]*&quot;;this.$rules={start:[{token:&quot;string.cdata.xml&quot;,regex:&quot;&lt;\\!\\[CDATA\\[&quot;,next:&quot;cdata&quot;},{token:[&quot;punctuation.xml-decl.xml&quot;,&quot;keyword.xml-decl.xml&quot;],regex:&quot;(&lt;\\?)(xml)(?=[\\s])&quot;,next:&quot;xml_decl&quot;,caseInsensitive:!0},{token:[&quot;punctuation.instruction.xml&quot;,&quot;keyword.instruction.xml&quot;],regex:&quot;(&lt;\\?)(&quot;+t+&quot;)&quot;,next:&quot;processing_instruction&quot;},{token:&quot;comment.xml&quot;,regex:&quot;&lt;\\!--&quot;,next:&quot;comment&quot;},{token:[&quot;xml-pe.doctype.xml&quot;,&quot;xml-pe.doctype.xml&quot;],regex:&quot;(&lt;\\!)(DOCTYPE)(?=[\\s])&quot;,next:&quot;doctype&quot;,caseInsensitive:!0},{include:&quot;tag&quot;},{token:&quot;text.end-tag-open.xml&quot;,regex:&quot;&lt;/&quot;},{token:&quot;text.tag-open.xml&quot;,regex:&quot;&lt;&quot;},{include:&quot;reference&quot;},{defaultToken:&quot;text.xml&quot;}],xml_decl:[{token:&quot;entity.other.attribute-name.decl-attribute-name.xml&quot;,regex:&quot;(?:&quot;+t+&quot;:)?&quot;+t+&quot;&quot;},{token:&quot;keyword.operator.decl-attribute-equals.xml&quot;,regex:&quot;=&quot;},{include:&quot;whitespace&quot;},{include:&quot;string&quot;},{token:&quot;punctuation.xml-decl.xml&quot;,regex:&quot;\\?&gt;&quot;,next:&quot;start&quot;}],processing_instruction:[{token:&quot;punctuation.instruction.xml&quot;,regex:&quot;\\?&gt;&quot;,next:&quot;start&quot;},{defaultToken:&quot;instruction.xml&quot;}],doctype:[{include:&quot;whitespace&quot;},{include:&quot;string&quot;},{token:&quot;xml-pe.doctype.xml&quot;,regex:&quot;&gt;&quot;,next:&quot;start&quot;},{token:&quot;xml-pe.xml&quot;,regex:&quot;[-_a-zA-Z0-9:]+&quot;},{token:&quot;punctuation.int-subset&quot;,regex:&quot;\\[&quot;,push:&quot;int_subset&quot;}],int_subset:[{token:&quot;text.xml&quot;,regex:&quot;\\s+&quot;},{token:&quot;punctuation.int-subset.xml&quot;,regex:&quot;]&quot;,next:&quot;pop&quot;},{token:[&quot;punctuation.markup-decl.xml&quot;,&quot;keyword.markup-decl.xml&quot;],regex:&quot;(&lt;\\!)(&quot;+t+&quot;)&quot;,push:[{token:&quot;text&quot;,regex:&quot;\\s+&quot;},{token:&quot;punctuation.markup-decl.xml&quot;,regex:&quot;&gt;&quot;,next:&quot;pop&quot;},{include:&quot;string&quot;}]}],cdata:[{token:&quot;string.cdata.xml&quot;,regex:&quot;\\]\\]&gt;&quot;,next:&quot;start&quot;},{token:&quot;text.xml&quot;,regex:&quot;\\s+&quot;},{token:&quot;text.xml&quot;,regex:&quot;(?:[^\\]]|\\](?!\\]&gt;))+&quot;}],comment:[{token:&quot;comment.xml&quot;,regex:&quot;--&gt;&quot;,next:&quot;start&quot;},{defaultToken:&quot;comment.xml&quot;}],reference:[{token:&quot;constant.language.escape.reference.xml&quot;,regex:&quot;(?:&amp;#[0-9]+;)|(?:&amp;#x[0-9a-fA-F]+;)|(?:&amp;[a-zA-Z0-9_:\\.-]+;)&quot;}],attr_reference:[{token:&quot;constant.language.escape.reference.attribute-value.xml&quot;,regex:&quot;(?:&amp;#[0-9]+;)|(?:&amp;#x[0-9a-fA-F]+;)|(?:&amp;[a-zA-Z0-9_:\\.-]+;)&quot;}],tag:[{token:[&quot;meta.tag.punctuation.tag-open.xml&quot;,&quot;meta.tag.punctuation.end-tag-open.xml&quot;,&quot;meta.tag.tag-name.xml&quot;],regex:&quot;(?:(&lt;)|(&lt;/))((?:&quot;+t+&quot;:)?&quot;+t+&quot;)&quot;,next:[{include:&quot;attributes&quot;},{token:&quot;meta.tag.punctuation.tag-close.xml&quot;,regex:&quot;/?&gt;&quot;,next:&quot;start&quot;}]}],tag_whitespace:[{token:&quot;text.tag-whitespace.xml&quot;,regex:&quot;\\s+&quot;}],whitespace:[{token:&quot;text.whitespace.xml&quot;,regex:&quot;\\s+&quot;}],string:[{token:&quot;string.xml&quot;,regex:&quot;&#39;&quot;,push:[{token:&quot;string.xml&quot;,regex:&quot;&#39;&quot;,next:&quot;pop&quot;},{defaultToken:&quot;string.xml&quot;}]},{token:&quot;string.xml&quot;,regex:&#39;&quot;&#39;,push:[{token:&quot;string.xml&quot;,regex:&#39;&quot;&#39;,next:&quot;pop&quot;},{defaultToken:&quot;string.xml&quot;}]}],attributes:[{token:&quot;entity.other.attribute-name.xml&quot;,regex:&quot;(?:&quot;+t+&quot;:)?&quot;+t+&quot;&quot;},{token:&quot;keyword.operator.attribute-equals.xml&quot;,regex:&quot;=&quot;},{include:&quot;tag_whitespace&quot;},{include:&quot;attribute_value&quot;}],attribute_value:[{token:&quot;string.attribute-value.xml&quot;,regex:&quot;&#39;&quot;,push:[{token:&quot;string.attribute-value.xml&quot;,regex:&quot;&#39;&quot;,next:&quot;pop&quot;},{include:&quot;attr_reference&quot;},{defaultToken:&quot;string.attribute-value.xml&quot;}]},{token:&quot;string.attribute-value.xml&quot;,regex:&#39;&quot;&#39;,push:[{token:&quot;string.attribute-value.xml&quot;,regex:&#39;&quot;&#39;,next:&quot;pop&quot;},{include:&quot;attr_reference&quot;},{defaultToken:&quot;string.attribute-value.xml&quot;}]}]},this.constructor===s&amp;&amp;this.normalizeRules()};(function(){this.embedTagRules=function(e,t,n){this.$rules.tag.unshift({token:[&quot;meta.tag.punctuation.tag-open.xml&quot;,&quot;meta.tag.&quot;+n+&quot;.tag-name.xml&quot;],regex:&quot;(&lt;)(&quot;+n+&quot;(?=\\s|&gt;|$))&quot;,next:[{include:&quot;attributes&quot;},{token:&quot;meta.tag.punctuation.tag-close.xml&quot;,regex:&quot;/?&gt;&quot;,next:t+&quot;start&quot;}]}),this.$rules[n+&quot;-end&quot;]=[{include:&quot;attributes&quot;},{token:&quot;meta.tag.punctuation.tag-close.xml&quot;,regex:&quot;/?&gt;&quot;,next:&quot;start&quot;,onMatch:function(e,t,n){return n.splice(0),this.token}}],this.embedRules(e,t,[{token:[&quot;meta.tag.punctuation.end-tag-open.xml&quot;,&quot;meta.tag.&quot;+n+&quot;.tag-name.xml&quot;],regex:&quot;(&lt;/)(&quot;+n+&quot;(?=\\s|&gt;|$))&quot;,next:n+&quot;-end&quot;},{token:&quot;string.cdata.xml&quot;,regex:&quot;&lt;\\!\\[CDATA\\[&quot;},{token:&quot;string.cdata.xml&quot;,regex:&quot;\\]\\]&gt;&quot;}])}}).call(i.prototype),r.inherits(s,i),t.XmlHighlightRules=s}),ace.define(&quot;ace/mode/html_highlight_rules&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/lib/lang&quot;,&quot;ace/mode/css_highlight_rules&quot;,&quot;ace/mode/javascript_highlight_rules&quot;,&quot;ace/mode/xml_highlight_rules&quot;],function(e,t,n){&quot;use strict&quot;;var r=e(&quot;../lib/oop&quot;),i=e(&quot;../lib/lang&quot;),s=e(&quot;./css_highlight_rules&quot;).CssHighlightRules,o=e(&quot;./javascript_highlight_rules&quot;).JavaScriptHighlightRules,u=e(&quot;./xml_highlight_rules&quot;).XmlHighlightRules,a=i.createMap({a:&quot;anchor&quot;,button:&quot;form&quot;,form:&quot;form&quot;,img:&quot;image&quot;,input:&quot;form&quot;,label:&quot;form&quot;,option:&quot;form&quot;,script:&quot;script&quot;,select:&quot;form&quot;,textarea:&quot;form&quot;,style:&quot;style&quot;,table:&quot;table&quot;,tbody:&quot;table&quot;,td:&quot;table&quot;,tfoot:&quot;table&quot;,th:&quot;table&quot;,tr:&quot;table&quot;}),f=function(){u.call(this),this.addRules({attributes:[{include:&quot;tag_whitespace&quot;},{token:&quot;entity.other.attribute-name.xml&quot;,regex:&quot;[-_a-zA-Z0-9:.]+&quot;},{token:&quot;keyword.operator.attribute-equals.xml&quot;,regex:&quot;=&quot;,push:[{include:&quot;tag_whitespace&quot;},{token:&quot;string.unquoted.attribute-value.html&quot;,regex:&quot;[^&lt;&gt;=&#39;\&quot;`\\s]+&quot;,next:&quot;pop&quot;},{token:&quot;empty&quot;,regex:&quot;&quot;,next:&quot;pop&quot;}]},{include:&quot;attribute_value&quot;}],tag:[{token:function(e,t){var n=a[t];return[&quot;meta.tag.punctuation.&quot;+(e==&quot;&lt;&quot;?&quot;&quot;:&quot;end-&quot;)+&quot;tag-open.xml&quot;,&quot;meta.tag&quot;+(n?&quot;.&quot;+n:&quot;&quot;)+&quot;.tag-name.xml&quot;]},regex:&quot;(&lt;/?)([-_a-zA-Z0-9:.]+)&quot;,next:&quot;tag_stuff&quot;}],tag_stuff:[{include:&quot;attributes&quot;},{token:&quot;meta.tag.punctuation.tag-close.xml&quot;,regex:&quot;/?&gt;&quot;,next:&quot;start&quot;}]}),this.embedTagRules(s,&quot;css-&quot;,&quot;style&quot;),this.embedTagRules((new o({noJSX:!0})).getRules(),&quot;js-&quot;,&quot;script&quot;),this.constructor===f&amp;&amp;this.normalizeRules()};r.inherits(f,u),t.HtmlHighlightRules=f}),ace.define(&quot;ace/mode/behaviour/xml&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/mode/behaviour&quot;,&quot;ace/token_iterator&quot;,&quot;ace/lib/lang&quot;],function(e,t,n){&quot;use strict&quot;;function u(e,t){return e.type.lastIndexOf(t+&quot;.xml&quot;)&gt;-1}var r=e(&quot;../../lib/oop&quot;),i=e(&quot;../behaviour&quot;).Behaviour,s=e(&quot;../../token_iterator&quot;).TokenIterator,o=e(&quot;../../lib/lang&quot;),a=function(){this.add(&quot;string_dquotes&quot;,&quot;insertion&quot;,function(e,t,n,r,i){if(i==&#39;&quot;&#39;||i==&quot;&#39;&quot;){var o=i,a=r.doc.getTextRange(n.getSelectionRange());if(a!==&quot;&quot;&amp;&amp;a!==&quot;&#39;&quot;&amp;&amp;a!=&#39;&quot;&#39;&amp;&amp;n.getWrapBehavioursEnabled())return{text:o+a+o,selection:!1};var f=n.getCursorPosition(),l=r.doc.getLine(f.row),c=l.substring(f.column,f.column+1),h=new s(r,f.row,f.column),p=h.getCurrentToken();if(c==o&amp;&amp;(u(p,&quot;attribute-value&quot;)||u(p,&quot;string&quot;)))return{text:&quot;&quot;,selection:[1,1]};p||(p=h.stepBackward());if(!p)return;while(u(p,&quot;tag-whitespace&quot;)||u(p,&quot;whitespace&quot;))p=h.stepBackward();var d=!c||c.match(/\s/);if(u(p,&quot;attribute-equals&quot;)&amp;&amp;(d||c==&quot;&gt;&quot;)||u(p,&quot;decl-attribute-equals&quot;)&amp;&amp;(d||c==&quot;?&quot;))return{text:o+o,selection:[1,1]}}}),this.add(&quot;string_dquotes&quot;,&quot;deletion&quot;,function(e,t,n,r,i){var s=r.doc.getTextRange(i);if(!i.isMultiLine()&amp;&amp;(s==&#39;&quot;&#39;||s==&quot;&#39;&quot;)){var o=r.doc.getLine(i.start.row),u=o.substring(i.start.column+1,i.start.column+2);if(u==s)return i.end.column++,i}}),this.add(&quot;autoclosing&quot;,&quot;insertion&quot;,function(e,t,n,r,i){if(i==&quot;&gt;&quot;){var o=n.getCursorPosition(),a=new s(r,o.row,o.column),f=a.getCurrentToken()||a.stepBackward();if(!f||!(u(f,&quot;tag-name&quot;)||u(f,&quot;tag-whitespace&quot;)||u(f,&quot;attribute-name&quot;)||u(f,&quot;attribute-equals&quot;)||u(f,&quot;attribute-value&quot;)))return;if(u(f,&quot;reference.attribute-value&quot;))return;if(u(f,&quot;attribute-value&quot;)){var l=f.value.charAt(0);if(l==&#39;&quot;&#39;||l==&quot;&#39;&quot;){var c=f.value.charAt(f.value.length-1),h=a.getCurrentTokenColumn()+f.value.length;if(h&gt;o.column||h==o.column&amp;&amp;l!=c)return}}while(!u(f,&quot;tag-name&quot;))f=a.stepBackward();var p=a.getCurrentTokenRow(),d=a.getCurrentTokenColumn();if(u(a.stepBackward(),&quot;end-tag-open&quot;))return;var v=f.value;p==o.row&amp;&amp;(v=v.substring(0,o.column-d));if(this.voidElements.hasOwnProperty(v.toLowerCase()))return;return{text:&quot;&gt;&lt;/&quot;+v+&quot;&gt;&quot;,selection:[1,1]}}}),this.add(&quot;autoindent&quot;,&quot;insertion&quot;,function(e,t,n,r,i){if(i==&quot;\n&quot;){var o=n.getCursorPosition(),u=r.getLine(o.row),a=new s(r,o.row,o.column),f=a.getCurrentToken();if(f&amp;&amp;f.type.indexOf(&quot;tag-close&quot;)!==-1){if(f.value==&quot;/&gt;&quot;)return;while(f&amp;&amp;f.type.indexOf(&quot;tag-name&quot;)===-1)f=a.stepBackward();if(!f)return;var l=f.value,c=a.getCurrentTokenRow();f=a.stepBackward();if(!f||f.type.indexOf(&quot;end-tag&quot;)!==-1)return;if(this.voidElements&amp;&amp;!this.voidElements[l]){var h=r.getTokenAt(o.row,o.column+1),u=r.getLine(c),p=this.$getIndent(u),d=p+r.getTabString();return h&amp;&amp;h.value===&quot;&lt;/&quot;?{text:&quot;\n&quot;+d+&quot;\n&quot;+p,selection:[1,d.length,1,d.length]}:{text:&quot;\n&quot;+d}}}}})};r.inherits(a,i),t.XmlBehaviour=a}),ace.define(&quot;ace/mode/folding/mixed&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/mode/folding/fold_mode&quot;],function(e,t,n){&quot;use strict&quot;;var r=e(&quot;../../lib/oop&quot;),i=e(&quot;./fold_mode&quot;).FoldMode,s=t.FoldMode=function(e,t){this.defaultMode=e,this.subModes=t};r.inherits(s,i),function(){this.$getMode=function(e){typeof e!=&quot;string&quot;&amp;&amp;(e=e[0]);for(var t in this.subModes)if(e.indexOf(t)===0)return this.subModes[t];return null},this.$tryMode=function(e,t,n,r){var i=this.$getMode(e);return i?i.getFoldWidget(t,n,r):&quot;&quot;},this.getFoldWidget=function(e,t,n){return this.$tryMode(e.getState(n-1),e,t,n)||this.$tryMode(e.getState(n),e,t,n)||this.defaultMode.getFoldWidget(e,t,n)},this.getFoldWidgetRange=function(e,t,n){var r=this.$getMode(e.getState(n-1));if(!r||!r.getFoldWidget(e,t,n))r=this.$getMode(e.getState(n));if(!r||!r.getFoldWidget(e,t,n))r=this.defaultMode;return r.getFoldWidgetRange(e,t,n)}}.call(s.prototype)}),ace.define(&quot;ace/mode/folding/xml&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/lib/lang&quot;,&quot;ace/range&quot;,&quot;ace/mode/folding/fold_mode&quot;,&quot;ace/token_iterator&quot;],function(e,t,n){&quot;use strict&quot;;function l(e,t){return e.type.lastIndexOf(t+&quot;.xml&quot;)&gt;-1}var r=e(&quot;../../lib/oop&quot;),i=e(&quot;../../lib/lang&quot;),s=e(&quot;../../range&quot;).Range,o=e(&quot;./fold_mode&quot;).FoldMode,u=e(&quot;../../token_iterator&quot;).TokenIterator,a=t.FoldMode=function(e,t){o.call(this),this.voidElements=e||{},this.optionalEndTags=r.mixin({},this.voidElements),t&amp;&amp;r.mixin(this.optionalEndTags,t)};r.inherits(a,o);var f=function(){this.tagName=&quot;&quot;,this.closing=!1,this.selfClosing=!1,this.start={row:0,column:0},this.end={row:0,column:0}};(function(){this.getFoldWidget=function(e,t,n){var r=this._getFirstTagInLine(e,n);return r?r.closing||!r.tagName&amp;&amp;r.selfClosing?t==&quot;markbeginend&quot;?&quot;end&quot;:&quot;&quot;:!r.tagName||r.selfClosing||this.voidElements.hasOwnProperty(r.tagName.toLowerCase())?&quot;&quot;:this._findEndTagInLine(e,n,r.tagName,r.end.column)?&quot;&quot;:&quot;start&quot;:&quot;&quot;},this._getFirstTagInLine=function(e,t){var n=e.getTokens(t),r=new f;for(var i=0;i&lt;n.length;i++){var s=n[i];if(l(s,&quot;tag-open&quot;)){r.end.column=r.start.column+s.value.length,r.closing=l(s,&quot;end-tag-open&quot;),s=n[++i];if(!s)return null;r.tagName=s.value,r.end.column+=s.value.length;for(i++;i&lt;n.length;i++){s=n[i],r.end.column+=s.value.length;if(l(s,&quot;tag-close&quot;)){r.selfClosing=s.value==&quot;/&gt;&quot;;break}}return r}if(l(s,&quot;tag-close&quot;))return r.selfClosing=s.value==&quot;/&gt;&quot;,r;r.start.column+=s.value.length}return null},this._findEndTagInLine=function(e,t,n,r){var i=e.getTokens(t),s=0;for(var o=0;o&lt;i.length;o++){var u=i[o];s+=u.value.length;if(s&lt;r)continue;if(l(u,&quot;end-tag-open&quot;)){u=i[o+1];if(u&amp;&amp;u.value==n)return!0}}return!1},this._readTagForward=function(e){var t=e.getCurrentToken();if(!t)return null;var n=new f;do if(l(t,&quot;tag-open&quot;))n.closing=l(t,&quot;end-tag-open&quot;),n.start.row=e.getCurrentTokenRow(),n.start.column=e.getCurrentTokenColumn();else if(l(t,&quot;tag-name&quot;))n.tagName=t.value;else if(l(t,&quot;tag-close&quot;))return n.selfClosing=t.value==&quot;/&gt;&quot;,n.end.row=e.getCurrentTokenRow(),n.end.column=e.getCurrentTokenColumn()+t.value.length,e.stepForward(),n;while(t=e.stepForward());return null},this._readTagBackward=function(e){var t=e.getCurrentToken();if(!t)return null;var n=new f;do{if(l(t,&quot;tag-open&quot;))return n.closing=l(t,&quot;end-tag-open&quot;),n.start.row=e.getCurrentTokenRow(),n.start.column=e.getCurrentTokenColumn(),e.stepBackward(),n;l(t,&quot;tag-name&quot;)?n.tagName=t.value:l(t,&quot;tag-close&quot;)&amp;&amp;(n.selfClosing=t.value==&quot;/&gt;&quot;,n.end.row=e.getCurrentTokenRow(),n.end.column=e.getCurrentTokenColumn()+t.value.length)}while(t=e.stepBackward());return null},this._pop=function(e,t){while(e.length){var n=e[e.length-1];if(!t||n.tagName==t.tagName)return e.pop();if(this.optionalEndTags.hasOwnProperty(n.tagName)){e.pop();continue}return null}},this.getFoldWidgetRange=function(e,t,n){var r=this._getFirstTagInLine(e,n);if(!r)return null;var i=r.closing||r.selfClosing,o=[],a;if(!i){var f=new u(e,n,r.start.column),l={row:n,column:r.start.column+r.tagName.length+2};r.start.row==r.end.row&amp;&amp;(l.column=r.end.column);while(a=this._readTagForward(f)){if(a.selfClosing){if(!o.length)return a.start.column+=a.tagName.length+2,a.end.column-=2,s.fromPoints(a.start,a.end);continue}if(a.closing){this._pop(o,a);if(o.length==0)return s.fromPoints(l,a.start)}else o.push(a)}}else{var f=new u(e,n,r.end.column),c={row:n,column:r.start.column};while(a=this._readTagBackward(f)){if(a.selfClosing){if(!o.length)return a.start.column+=a.tagName.length+2,a.end.column-=2,s.fromPoints(a.start,a.end);continue}if(!a.closing){this._pop(o,a);if(o.length==0)return a.start.column+=a.tagName.length+2,a.start.row==a.end.row&amp;&amp;a.start.column&lt;a.end.column&amp;&amp;(a.start.column=a.end.column),s.fromPoints(a.start,c)}else o.push(a)}}}}).call(a.prototype)}),ace.define(&quot;ace/mode/folding/html&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/mode/folding/mixed&quot;,&quot;ace/mode/folding/xml&quot;,&quot;ace/mode/folding/cstyle&quot;],function(e,t,n){&quot;use strict&quot;;var r=e(&quot;../../lib/oop&quot;),i=e(&quot;./mixed&quot;).FoldMode,s=e(&quot;./xml&quot;).FoldMode,o=e(&quot;./cstyle&quot;).FoldMode,u=t.FoldMode=function(e,t){i.call(this,new s(e,t),{&quot;js-&quot;:new o,&quot;css-&quot;:new o})};r.inherits(u,i)}),ace.define(&quot;ace/mode/html_completions&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/token_iterator&quot;],function(e,t,n){&quot;use strict&quot;;function f(e,t){return e.type.lastIndexOf(t+&quot;.xml&quot;)&gt;-1}function l(e,t){var n=new r(e,t.row,t.column),i=n.getCurrentToken();while(i&amp;&amp;!f(i,&quot;tag-name&quot;))i=n.stepBackward();if(i)return i.value}function c(e,t){var n=new r(e,t.row,t.column),i=n.getCurrentToken();while(i&amp;&amp;!f(i,&quot;attribute-name&quot;))i=n.stepBackward();if(i)return i.value}var r=e(&quot;../token_iterator&quot;).TokenIterator,i=[&quot;accesskey&quot;,&quot;class&quot;,&quot;contenteditable&quot;,&quot;contextmenu&quot;,&quot;dir&quot;,&quot;draggable&quot;,&quot;dropzone&quot;,&quot;hidden&quot;,&quot;id&quot;,&quot;inert&quot;,&quot;itemid&quot;,&quot;itemprop&quot;,&quot;itemref&quot;,&quot;itemscope&quot;,&quot;itemtype&quot;,&quot;lang&quot;,&quot;spellcheck&quot;,&quot;style&quot;,&quot;tabindex&quot;,&quot;title&quot;,&quot;translate&quot;],s=[&quot;onabort&quot;,&quot;onblur&quot;,&quot;oncancel&quot;,&quot;oncanplay&quot;,&quot;oncanplaythrough&quot;,&quot;onchange&quot;,&quot;onclick&quot;,&quot;onclose&quot;,&quot;oncontextmenu&quot;,&quot;oncuechange&quot;,&quot;ondblclick&quot;,&quot;ondrag&quot;,&quot;ondragend&quot;,&quot;ondragenter&quot;,&quot;ondragleave&quot;,&quot;ondragover&quot;,&quot;ondragstart&quot;,&quot;ondrop&quot;,&quot;ondurationchange&quot;,&quot;onemptied&quot;,&quot;onended&quot;,&quot;onerror&quot;,&quot;onfocus&quot;,&quot;oninput&quot;,&quot;oninvalid&quot;,&quot;onkeydown&quot;,&quot;onkeypress&quot;,&quot;onkeyup&quot;,&quot;onload&quot;,&quot;onloadeddata&quot;,&quot;onloadedmetadata&quot;,&quot;onloadstart&quot;,&quot;onmousedown&quot;,&quot;onmousemove&quot;,&quot;onmouseout&quot;,&quot;onmouseover&quot;,&quot;onmouseup&quot;,&quot;onmousewheel&quot;,&quot;onpause&quot;,&quot;onplay&quot;,&quot;onplaying&quot;,&quot;onprogress&quot;,&quot;onratechange&quot;,&quot;onreset&quot;,&quot;onscroll&quot;,&quot;onseeked&quot;,&quot;onseeking&quot;,&quot;onselect&quot;,&quot;onshow&quot;,&quot;onstalled&quot;,&quot;onsubmit&quot;,&quot;onsuspend&quot;,&quot;ontimeupdate&quot;,&quot;onvolumechange&quot;,&quot;onwaiting&quot;],o=i.concat(s),u={html:{manifest:1},head:{},title:{},base:{href:1,target:1},link:{href:1,hreflang:1,rel:{stylesheet:1,icon:1},media:{all:1,screen:1,print:1},type:{&quot;text/css&quot;:1,&quot;image/png&quot;:1,&quot;image/jpeg&quot;:1,&quot;image/gif&quot;:1},sizes:1},meta:{&quot;http-equiv&quot;:{&quot;content-type&quot;:1},name:{description:1,keywords:1},content:{&quot;text/html; charset=UTF-8&quot;:1},charset:1},style:{type:1,media:{all:1,screen:1,print:1},scoped:1},script:{charset:1,type:{&quot;text/javascript&quot;:1},src:1,defer:1,async:1},noscript:{href:1},body:{onafterprint:1,onbeforeprint:1,onbeforeunload:1,onhashchange:1,onmessage:1,onoffline:1,onpopstate:1,onredo:1,onresize:1,onstorage:1,onundo:1,onunload:1},section:{},nav:{},article:{pubdate:1},aside:{},h1:{},h2:{},h3:{},h4:{},h5:{},h6:{},header:{},footer:{},address:{},main:{},p:{},hr:{},pre:{},blockquote:{cite:1},ol:{start:1,reversed:1},ul:{},li:{value:1},dl:{},dt:{},dd:{},figure:{},figcaption:{},div:{},a:{href:1,target:{_blank:1,top:1},ping:1,rel:{nofollow:1,alternate:1,author:1,bookmark:1,help:1,license:1,next:1,noreferrer:1,prefetch:1,prev:1,search:1,tag:1},media:1,hreflang:1,type:1},em:{},strong:{},small:{},s:{},cite:{},q:{cite:1},dfn:{},abbr:{},data:{},time:{datetime:1},code:{},&quot;var&quot;:{},samp:{},kbd:{},sub:{},sup:{},i:{},b:{},u:{},mark:{},ruby:{},rt:{},rp:{},bdi:{},bdo:{},span:{},br:{},wbr:{},ins:{cite:1,datetime:1},del:{cite:1,datetime:1},img:{alt:1,src:1,height:1,width:1,usemap:1,ismap:1},iframe:{name:1,src:1,height:1,width:1,sandbox:{&quot;allow-same-origin&quot;:1,&quot;allow-top-navigation&quot;:1,&quot;allow-forms&quot;:1,&quot;allow-scripts&quot;:1},seamless:{seamless:1}},embed:{src:1,height:1,width:1,type:1},object:{param:1,data:1,type:1,height:1,width:1,usemap:1,name:1,form:1,classid:1},param:{name:1,value:1},video:{src:1,autobuffer:1,autoplay:{autoplay:1},loop:{loop:1},controls:{controls:1},width:1,height:1,poster:1,muted:{muted:1},preload:{auto:1,metadata:1,none:1}},audio:{src:1,autobuffer:1,autoplay:{autoplay:1},loop:{loop:1},controls:{controls:1},muted:{muted:1},preload:{auto:1,metadata:1,none:1}},source:{src:1,type:1,media:1},track:{kind:1,src:1,srclang:1,label:1,&quot;default&quot;:1},canvas:{width:1,height:1},map:{name:1},area:{shape:1,coords:1,href:1,hreflang:1,alt:1,target:1,media:1,rel:1,ping:1,type:1},svg:{},math:{},table:{summary:1},caption:{},colgroup:{span:1},col:{span:1},tbody:{},thead:{},tfoot:{},tr:{},td:{headers:1,rowspan:1,colspan:1},th:{headers:1,rowspan:1,colspan:1,scope:1},form:{&quot;accept-charset&quot;:1,action:1,autocomplete:1,enctype:{&quot;multipart/form-data&quot;:1,&quot;application/x-www-form-urlencoded&quot;:1},method:{get:1,post:1},name:1,novalidate:1,target:{_blank:1,top:1}},fieldset:{disabled:1,form:1,name:1},legend:{},label:{form:1,&quot;for&quot;:1},input:{type:{text:1,password:1,hidden:1,checkbox:1,submit:1,radio:1,file:1,button:1,reset:1,image:31,color:1,date:1,datetime:1,&quot;datetime-local&quot;:1,email:1,month:1,number:1,range:1,search:1,tel:1,time:1,url:1,week:1},accept:1,alt:1,autocomplete:{on:1,off:1},autofocus:{autofocus:1},checked:{checked:1},disabled:{disabled:1},form:1,formaction:1,formenctype:{&quot;application/x-www-form-urlencoded&quot;:1,&quot;multipart/form-data&quot;:1,&quot;text/plain&quot;:1},formmethod:{get:1,post:1},formnovalidate:{formnovalidate:1},formtarget:{_blank:1,_self:1,_parent:1,_top:1},height:1,list:1,max:1,maxlength:1,min:1,multiple:{multiple:1},pattern:1,placeholder:1,readonly:{readonly:1},required:{required:1},size:1,src:1,step:1,width:1,files:1,value:1},button:{autofocus:1,disabled:{disabled:1},form:1,formaction:1,formenctype:1,formmethod:1,formnovalidate:1,formtarget:1,name:1,value:1,type:{button:1,submit:1}},select:{autofocus:1,disabled:1,form:1,multiple:{multiple:1},name:1,size:1,readonly:{readonly:1}},datalist:{},optgroup:{disabled:1,label:1},option:{disabled:1,selected:1,label:1,value:1},textarea:{autofocus:{autofocus:1},disabled:{disabled:1},form:1,maxlength:1,name:1,placeholder:1,readonly:{readonly:1},required:{required:1},rows:1,cols:1,wrap:{on:1,off:1,hard:1,soft:1}},keygen:{autofocus:1,challenge:{challenge:1},disabled:{disabled:1},form:1,keytype:{rsa:1,dsa:1,ec:1},name:1},output:{&quot;for&quot;:1,form:1,name:1},progress:{value:1,max:1},meter:{value:1,min:1,max:1,low:1,high:1,optimum:1},details:{open:1},summary:{},command:{type:1,label:1,icon:1,disabled:1,checked:1,radiogroup:1,command:1},menu:{type:1,label:1},dialog:{open:1}},a=Object.keys(u),h=function(){};(function(){this.getCompletions=function(e,t,n,r){var i=t.getTokenAt(n.row,n.column);if(!i)return[];if(f(i,&quot;tag-name&quot;)||f(i,&quot;tag-open&quot;)||f(i,&quot;end-tag-open&quot;))return this.getTagCompletions(e,t,n,r);if(f(i,&quot;tag-whitespace&quot;)||f(i,&quot;attribute-name&quot;))return this.getAttributeCompletions(e,t,n,r);if(f(i,&quot;attribute-value&quot;))return this.getAttributeValueCompletions(e,t,n,r);var s=t.getLine(n.row).substr(0,n.column);return/&amp;[A-z]*$/i.test(s)?this.getHTMLEntityCompletions(e,t,n,r):[]},this.getTagCompletions=function(e,t,n,r){return a.map(function(e){return{value:e,meta:&quot;tag&quot;,score:Number.MAX_VALUE}})},this.getAttributeCompletions=function(e,t,n,r){var i=l(t,n);if(!i)return[];var s=o;return i in u&amp;&amp;(s=s.concat(Object.keys(u[i]))),s.map(function(e){return{caption:e,snippet:e+&#39;=&quot;$0&quot;&#39;,meta:&quot;attribute&quot;,score:Number.MAX_VALUE}})},this.getAttributeValueCompletions=function(e,t,n,r){var i=l(t,n),s=c(t,n);if(!i)return[];var o=[];return i in u&amp;&amp;s in u[i]&amp;&amp;typeof u[i][s]==&quot;object&quot;&amp;&amp;(o=Object.keys(u[i][s])),o.map(function(e){return{caption:e,snippet:e,meta:&quot;attribute value&quot;,score:Number.MAX_VALUE}})},this.getHTMLEntityCompletions=function(e,t,n,r){var i=[&quot;&amp;Aacute;&quot;,&quot;&amp;aacute;&quot;,&quot;&amp;Acirc;&quot;,&quot;&amp;acirc;&quot;,&quot;&amp;acute;&quot;,&quot;&amp;AElig;&quot;,&quot;&amp;aelig;&quot;,&quot;&amp;Agrave;&quot;,&quot;&amp;agrave;&quot;,&quot;&amp;alefsym;&quot;,&quot;&amp;Alpha;&quot;,&quot;&amp;alpha;&quot;,&quot;&amp;amp;&quot;,&quot;&amp;and;&quot;,&quot;&amp;ang;&quot;,&quot;&amp;Aring;&quot;,&quot;&amp;aring;&quot;,&quot;&amp;asymp;&quot;,&quot;&amp;Atilde;&quot;,&quot;&amp;atilde;&quot;,&quot;&amp;Auml;&quot;,&quot;&amp;auml;&quot;,&quot;&amp;bdquo;&quot;,&quot;&amp;Beta;&quot;,&quot;&amp;beta;&quot;,&quot;&amp;brvbar;&quot;,&quot;&amp;bull;&quot;,&quot;&amp;cap;&quot;,&quot;&amp;Ccedil;&quot;,&quot;&amp;ccedil;&quot;,&quot;&amp;cedil;&quot;,&quot;&amp;cent;&quot;,&quot;&amp;Chi;&quot;,&quot;&amp;chi;&quot;,&quot;&amp;circ;&quot;,&quot;&amp;clubs;&quot;,&quot;&amp;cong;&quot;,&quot;&amp;copy;&quot;,&quot;&amp;crarr;&quot;,&quot;&amp;cup;&quot;,&quot;&amp;curren;&quot;,&quot;&amp;Dagger;&quot;,&quot;&amp;dagger;&quot;,&quot;&amp;dArr;&quot;,&quot;&amp;darr;&quot;,&quot;&amp;deg;&quot;,&quot;&amp;Delta;&quot;,&quot;&amp;delta;&quot;,&quot;&amp;diams;&quot;,&quot;&amp;divide;&quot;,&quot;&amp;Eacute;&quot;,&quot;&amp;eacute;&quot;,&quot;&amp;Ecirc;&quot;,&quot;&amp;ecirc;&quot;,&quot;&amp;Egrave;&quot;,&quot;&amp;egrave;&quot;,&quot;&amp;empty;&quot;,&quot;&amp;emsp;&quot;,&quot;&amp;ensp;&quot;,&quot;&amp;Epsilon;&quot;,&quot;&amp;epsilon;&quot;,&quot;&amp;equiv;&quot;,&quot;&amp;Eta;&quot;,&quot;&amp;eta;&quot;,&quot;&amp;ETH;&quot;,&quot;&amp;eth;&quot;,&quot;&amp;Euml;&quot;,&quot;&amp;euml;&quot;,&quot;&amp;euro;&quot;,&quot;&amp;exist;&quot;,&quot;&amp;fnof;&quot;,&quot;&amp;forall;&quot;,&quot;&amp;frac12;&quot;,&quot;&amp;frac14;&quot;,&quot;&amp;frac34;&quot;,&quot;&amp;frasl;&quot;,&quot;&amp;Gamma;&quot;,&quot;&amp;gamma;&quot;,&quot;&amp;ge;&quot;,&quot;&amp;gt;&quot;,&quot;&amp;hArr;&quot;,&quot;&amp;harr;&quot;,&quot;&amp;hearts;&quot;,&quot;&amp;hellip;&quot;,&quot;&amp;Iacute;&quot;,&quot;&amp;iacute;&quot;,&quot;&amp;Icirc;&quot;,&quot;&amp;icirc;&quot;,&quot;&amp;iexcl;&quot;,&quot;&amp;Igrave;&quot;,&quot;&amp;igrave;&quot;,&quot;&amp;image;&quot;,&quot;&amp;infin;&quot;,&quot;&amp;int;&quot;,&quot;&amp;Iota;&quot;,&quot;&amp;iota;&quot;,&quot;&amp;iquest;&quot;,&quot;&amp;isin;&quot;,&quot;&amp;Iuml;&quot;,&quot;&amp;iuml;&quot;,&quot;&amp;Kappa;&quot;,&quot;&amp;kappa;&quot;,&quot;&amp;Lambda;&quot;,&quot;&amp;lambda;&quot;,&quot;&amp;lang;&quot;,&quot;&amp;laquo;&quot;,&quot;&amp;lArr;&quot;,&quot;&amp;larr;&quot;,&quot;&amp;lceil;&quot;,&quot;&amp;ldquo;&quot;,&quot;&amp;le;&quot;,&quot;&amp;lfloor;&quot;,&quot;&amp;lowast;&quot;,&quot;&amp;loz;&quot;,&quot;&amp;lrm;&quot;,&quot;&amp;lsaquo;&quot;,&quot;&amp;lsquo;&quot;,&quot;&amp;lt;&quot;,&quot;&amp;macr;&quot;,&quot;&amp;mdash;&quot;,&quot;&amp;micro;&quot;,&quot;&amp;middot;&quot;,&quot;&amp;minus;&quot;,&quot;&amp;Mu;&quot;,&quot;&amp;mu;&quot;,&quot;&amp;nabla;&quot;,&quot;&amp;nbsp;&quot;,&quot;&amp;ndash;&quot;,&quot;&amp;ne;&quot;,&quot;&amp;ni;&quot;,&quot;&amp;not;&quot;,&quot;&amp;notin;&quot;,&quot;&amp;nsub;&quot;,&quot;&amp;Ntilde;&quot;,&quot;&amp;ntilde;&quot;,&quot;&amp;Nu;&quot;,&quot;&amp;nu;&quot;,&quot;&amp;Oacute;&quot;,&quot;&amp;oacute;&quot;,&quot;&amp;Ocirc;&quot;,&quot;&amp;ocirc;&quot;,&quot;&amp;OElig;&quot;,&quot;&amp;oelig;&quot;,&quot;&amp;Ograve;&quot;,&quot;&amp;ograve;&quot;,&quot;&amp;oline;&quot;,&quot;&amp;Omega;&quot;,&quot;&amp;omega;&quot;,&quot;&amp;Omicron;&quot;,&quot;&amp;omicron;&quot;,&quot;&amp;oplus;&quot;,&quot;&amp;or;&quot;,&quot;&amp;ordf;&quot;,&quot;&amp;ordm;&quot;,&quot;&amp;Oslash;&quot;,&quot;&amp;oslash;&quot;,&quot;&amp;Otilde;&quot;,&quot;&amp;otilde;&quot;,&quot;&amp;otimes;&quot;,&quot;&amp;Ouml;&quot;,&quot;&amp;ouml;&quot;,&quot;&amp;para;&quot;,&quot;&amp;part;&quot;,&quot;&amp;permil;&quot;,&quot;&amp;perp;&quot;,&quot;&amp;Phi;&quot;,&quot;&amp;phi;&quot;,&quot;&amp;Pi;&quot;,&quot;&amp;pi;&quot;,&quot;&amp;piv;&quot;,&quot;&amp;plusmn;&quot;,&quot;&amp;pound;&quot;,&quot;&amp;Prime;&quot;,&quot;&amp;prime;&quot;,&quot;&amp;prod;&quot;,&quot;&amp;prop;&quot;,&quot;&amp;Psi;&quot;,&quot;&amp;psi;&quot;,&quot;&amp;quot;&quot;,&quot;&amp;radic;&quot;,&quot;&amp;rang;&quot;,&quot;&amp;raquo;&quot;,&quot;&amp;rArr;&quot;,&quot;&amp;rarr;&quot;,&quot;&amp;rceil;&quot;,&quot;&amp;rdquo;&quot;,&quot;&amp;real;&quot;,&quot;&amp;reg;&quot;,&quot;&amp;rfloor;&quot;,&quot;&amp;Rho;&quot;,&quot;&amp;rho;&quot;,&quot;&amp;rlm;&quot;,&quot;&amp;rsaquo;&quot;,&quot;&amp;rsquo;&quot;,&quot;&amp;sbquo;&quot;,&quot;&amp;Scaron;&quot;,&quot;&amp;scaron;&quot;,&quot;&amp;sdot;&quot;,&quot;&amp;sect;&quot;,&quot;&amp;shy;&quot;,&quot;&amp;Sigma;&quot;,&quot;&amp;sigma;&quot;,&quot;&amp;sigmaf;&quot;,&quot;&amp;sim;&quot;,&quot;&amp;spades;&quot;,&quot;&amp;sub;&quot;,&quot;&amp;sube;&quot;,&quot;&amp;sum;&quot;,&quot;&amp;sup;&quot;,&quot;&amp;sup1;&quot;,&quot;&amp;sup2;&quot;,&quot;&amp;sup3;&quot;,&quot;&amp;supe;&quot;,&quot;&amp;szlig;&quot;,&quot;&amp;Tau;&quot;,&quot;&amp;tau;&quot;,&quot;&amp;there4;&quot;,&quot;&amp;Theta;&quot;,&quot;&amp;theta;&quot;,&quot;&amp;thetasym;&quot;,&quot;&amp;thinsp;&quot;,&quot;&amp;THORN;&quot;,&quot;&amp;thorn;&quot;,&quot;&amp;tilde;&quot;,&quot;&amp;times;&quot;,&quot;&amp;trade;&quot;,&quot;&amp;Uacute;&quot;,&quot;&amp;uacute;&quot;,&quot;&amp;uArr;&quot;,&quot;&amp;uarr;&quot;,&quot;&amp;Ucirc;&quot;,&quot;&amp;ucirc;&quot;,&quot;&amp;Ugrave;&quot;,&quot;&amp;ugrave;&quot;,&quot;&amp;uml;&quot;,&quot;&amp;upsih;&quot;,&quot;&amp;Upsilon;&quot;,&quot;&amp;upsilon;&quot;,&quot;&amp;Uuml;&quot;,&quot;&amp;uuml;&quot;,&quot;&amp;weierp;&quot;,&quot;&amp;Xi;&quot;,&quot;&amp;xi;&quot;,&quot;&amp;Yacute;&quot;,&quot;&amp;yacute;&quot;,&quot;&amp;yen;&quot;,&quot;&amp;Yuml;&quot;,&quot;&amp;yuml;&quot;,&quot;&amp;Zeta;&quot;,&quot;&amp;zeta;&quot;,&quot;&amp;zwj;&quot;,&quot;&amp;zwnj;&quot;];return i.map(function(e){return{caption:e,snippet:e.substr(1),meta:&quot;html entity&quot;,score:Number.MAX_VALUE}})}}).call(h.prototype),t.HtmlCompletions=h}),ace.define(&quot;ace/mode/html&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/lib/lang&quot;,&quot;ace/mode/text&quot;,&quot;ace/mode/javascript&quot;,&quot;ace/mode/css&quot;,&quot;ace/mode/html_highlight_rules&quot;,&quot;ace/mode/behaviour/xml&quot;,&quot;ace/mode/folding/html&quot;,&quot;ace/mode/html_completions&quot;,&quot;ace/worker/worker_client&quot;],function(e,t,n){&quot;use strict&quot;;var r=e(&quot;../lib/oop&quot;),i=e(&quot;../lib/lang&quot;),s=e(&quot;./text&quot;).Mode,o=e(&quot;./javascript&quot;).Mode,u=e(&quot;./css&quot;).Mode,a=e(&quot;./html_highlight_rules&quot;).HtmlHighlightRules,f=e(&quot;./behaviour/xml&quot;).XmlBehaviour,l=e(&quot;./folding/html&quot;).FoldMode,c=e(&quot;./html_completions&quot;).HtmlCompletions,h=e(&quot;../worker/worker_client&quot;).WorkerClient,p=[&quot;area&quot;,&quot;base&quot;,&quot;br&quot;,&quot;col&quot;,&quot;embed&quot;,&quot;hr&quot;,&quot;img&quot;,&quot;input&quot;,&quot;keygen&quot;,&quot;link&quot;,&quot;meta&quot;,&quot;menuitem&quot;,&quot;param&quot;,&quot;source&quot;,&quot;track&quot;,&quot;wbr&quot;],d=[&quot;li&quot;,&quot;dt&quot;,&quot;dd&quot;,&quot;p&quot;,&quot;rt&quot;,&quot;rp&quot;,&quot;optgroup&quot;,&quot;option&quot;,&quot;colgroup&quot;,&quot;td&quot;,&quot;th&quot;],v=function(e){this.fragmentContext=e&amp;&amp;e.fragmentContext,this.HighlightRules=a,this.$behaviour=new f,this.$completer=new c,this.createModeDelegates({&quot;js-&quot;:o,&quot;css-&quot;:u}),this.foldingRules=new l(this.voidElements,i.arrayToMap(d))};r.inherits(v,s),function(){this.blockComment={start:&quot;&lt;!--&quot;,end:&quot;--&gt;&quot;},this.voidElements=i.arrayToMap(p),this.getNextLineIndent=function(e,t,n){return this.$getIndent(t)},this.checkOutdent=function(e,t,n){return!1},this.getCompletions=function(e,t,n,r){return this.$completer.getCompletions(e,t,n,r)},this.createWorker=function(e){if(this.constructor!=v)return;var t=new h([&quot;ace&quot;],&quot;ace/mode/html_worker&quot;,&quot;Worker&quot;);return t.attachToDocument(e.getDocument()),this.fragmentContext&amp;&amp;t.call(&quot;setOptions&quot;,[{context:this.fragmentContext}]),t.on(&quot;error&quot;,function(t){e.setAnnotations(t.data)}),t.on(&quot;terminate&quot;,function(){e.clearAnnotations()}),t},this.$id=&quot;ace/mode/html&quot;}.call(v.prototype),t.Mode=v})</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop"></div>
</div>

    </div>
  </div>

    </div>

        <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span aria-hidden="true" class="mega-octicon octicon-mark-github" title="GitHub "></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.04832s from github-fe116-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span aria-hidden="true" class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span aria-hidden="true" class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" integrity="sha256-KJVHXHFPE3kLY+Y2tTiaaRiiYCWcWyKhWs9e8mvW7wk=" src="https://assets-cdn.github.com/assets/frameworks-2895475c714f13790b63e636b5389a6918a260259c5b22a15acf5ef26bd6ef09.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-wEBGCKO80TEHdt8Ksm4Qe/1w/wOCQI9D7eGoHnMOOc0=" src="https://assets-cdn.github.com/assets/github-c0404608a3bcd1310776df0ab26e107bfd70ff0382408f43ede1a81e730e39cd.js"></script>
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span aria-hidden="true" class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <span aria-hidden="true" class="octicon octicon-x"></span>
    </button>
  </div>
</div>

  </body>
</html>

