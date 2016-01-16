



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>ace-builds/theme-twilight.js at master · ajaxorg/ace-builds · GitHub</title>
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

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="80BB6116:5D83:3A7B9F1:569A8ABE" name="octolytics-dimension-request_id" />
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
      <a class="btn" href="/login?return_to=%2Fajaxorg%2Face-builds%2Fblob%2Fmaster%2Fsrc-min-noconflict%2Ftheme-twilight.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
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

    

<a href="/ajaxorg/ace-builds/blob/3fb55e8e374ab02ce47c1ae55ffb60a1835f3055/src-min-noconflict/theme-twilight.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:1b1c9787314279a6dc20c04b312b29e6 -->

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
               href="/ajaxorg/ace-builds/blob/gh-pages/src-min-noconflict/theme-twilight.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/ajaxorg/ace-builds/blob/master/src-min-noconflict/theme-twilight.js"
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
              href="/ajaxorg/ace-builds/tree/v1.2.2/src-min-noconflict/theme-twilight.js"
              data-name="v1.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.2">
                v1.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.2.1/src-min-noconflict/theme-twilight.js"
              data-name="v1.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.1">
                v1.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.2.0/src-min-noconflict/theme-twilight.js"
              data-name="v1.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.0">
                v1.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.9/src-min-noconflict/theme-twilight.js"
              data-name="v1.1.9"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.9">
                v1.1.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.8/src-min-noconflict/theme-twilight.js"
              data-name="v1.1.8"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.8">
                v1.1.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.7/src-min-noconflict/theme-twilight.js"
              data-name="v1.1.7"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.7">
                v1.1.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.6/src-min-noconflict/theme-twilight.js"
              data-name="v1.1.6"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.6">
                v1.1.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.5/src-min-noconflict/theme-twilight.js"
              data-name="v1.1.5"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.5">
                v1.1.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.4/src-min-noconflict/theme-twilight.js"
              data-name="v1.1.4"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.4">
                v1.1.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.3/src-min-noconflict/theme-twilight.js"
              data-name="v1.1.3"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.3">
                v1.1.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.2/src-min-noconflict/theme-twilight.js"
              data-name="v1.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.2">
                v1.1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.01/src-min-noconflict/theme-twilight.js"
              data-name="v1.1.01"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.01">
                v1.1.01
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.1.1/src-min-noconflict/theme-twilight.js"
              data-name="v1.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.1">
                v1.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ajaxorg/ace-builds/tree/v1.0.0/src-min-noconflict/theme-twilight.js"
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
    <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/ajaxorg/ace-builds" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">ace-builds</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/ajaxorg/ace-builds/tree/master/src-min-noconflict" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">src-min-noconflict</span></a></span><span class="separator">/</span><strong class="final-path">theme-twilight.js</strong>
  </div>
</div>

<include-fragment class="commit-tease" src="/ajaxorg/ace-builds/contributors/master/src-min-noconflict/theme-twilight.js">
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
      <a href="/ajaxorg/ace-builds/raw/master/src-min-noconflict/theme-twilight.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/ajaxorg/ace-builds/blame/master/src-min-noconflict/theme-twilight.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/ajaxorg/ace-builds/commits/master/src-min-noconflict/theme-twilight.js" class="btn btn-sm " rel="nofollow">History</a>
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
    2.44 KB
  </div>
</div>

  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">ace.define(&quot;ace/theme/twilight&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/dom&quot;],function(e,t,n){t.isDark=!0,t.cssClass=&quot;ace-twilight&quot;,t.cssText=&quot;.ace-twilight .ace_gutter {background: #232323;color: #E2E2E2}.ace-twilight .ace_print-margin {width: 1px;background: #232323}.ace-twilight {background-color: #141414;color: #F8F8F8}.ace-twilight .ace_cursor {color: #A7A7A7}.ace-twilight .ace_marker-layer .ace_selection {background: rgba(221, 240, 255, 0.20)}.ace-twilight.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #141414;}.ace-twilight .ace_marker-layer .ace_step {background: rgb(102, 82, 0)}.ace-twilight .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgba(255, 255, 255, 0.25)}.ace-twilight .ace_marker-layer .ace_active-line {background: rgba(255, 255, 255, 0.031)}.ace-twilight .ace_gutter-active-line {background-color: rgba(255, 255, 255, 0.031)}.ace-twilight .ace_marker-layer .ace_selected-word {border: 1px solid rgba(221, 240, 255, 0.20)}.ace-twilight .ace_invisible {color: rgba(255, 255, 255, 0.25)}.ace-twilight .ace_keyword,.ace-twilight .ace_meta {color: #CDA869}.ace-twilight .ace_constant,.ace-twilight .ace_constant.ace_character,.ace-twilight .ace_constant.ace_character.ace_escape,.ace-twilight .ace_constant.ace_other,.ace-twilight .ace_heading,.ace-twilight .ace_markup.ace_heading,.ace-twilight .ace_support.ace_constant {color: #CF6A4C}.ace-twilight .ace_invalid.ace_illegal {color: #F8F8F8;background-color: rgba(86, 45, 86, 0.75)}.ace-twilight .ace_invalid.ace_deprecated {text-decoration: underline;font-style: italic;color: #D2A8A1}.ace-twilight .ace_support {color: #9B859D}.ace-twilight .ace_fold {background-color: #AC885B;border-color: #F8F8F8}.ace-twilight .ace_support.ace_function {color: #DAD085}.ace-twilight .ace_list,.ace-twilight .ace_markup.ace_list,.ace-twilight .ace_storage {color: #F9EE98}.ace-twilight .ace_entity.ace_name.ace_function,.ace-twilight .ace_meta.ace_tag,.ace-twilight .ace_variable {color: #AC885B}.ace-twilight .ace_string {color: #8F9D6A}.ace-twilight .ace_string.ace_regexp {color: #E9C062}.ace-twilight .ace_comment {font-style: italic;color: #5F5A60}.ace-twilight .ace_variable {color: #7587A6}.ace-twilight .ace_xml-pe {color: #494949}.ace-twilight .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWMQERFpYLC1tf0PAAgOAnPnhxyiAAAAAElFTkSuQmCC) right repeat-y}&quot;;var r=e(&quot;../lib/dom&quot;);r.importCssString(t.cssText,t.cssClass)})</td>
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
      <li>&copy; 2016 <span title="0.04493s from github-fe144-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
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

