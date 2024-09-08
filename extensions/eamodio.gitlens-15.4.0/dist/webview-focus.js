exports.id=447,exports.ids=[447],exports.modules={1070:(e,t,i)=>{i.d(t,{FocusWebviewProvider:()=>FocusWebviewProvider});var r=i(910),s=i(1398),n=i(1391),o=i(4703),a=i(7531),l=i(3161),h=i(9102),u=i(8559),c=i(304),d=i(6645),p=i(9634),m=i(3607),f=i(1225),g=i(7899),w=i(6707),R=i(3916),y=i(3446),b=i(4232),v=i(3131),_=i(2048),I=i(7463),q=i(3355);let C="focus",P=new q.Q2(C,"pr/openWorktree"),S=new q.Q2(C,"pr/openBranch"),A=new q.Q2(C,"pr/switchToBranch"),D=new q.Q2(C,"pr/snooze"),W=new q.Q2(C,"pr/pin"),k=new q.Q2(C,"issue/snooze"),E=new q.Q2(C,"issue/pin"),z=new q.C1(C,"didChange",!0);var B=Object.defineProperty,F=Object.getOwnPropertyDescriptor,x=(e,t,i,r)=>{for(var s,n=r>1?void 0:r?F(t,i):t,o=e.length-1;o>=0;o--)(s=e[o])&&(n=(r?s(t,i,n):s(n))||n);return r&&n&&B(t,i,n),n};let FocusWebviewProvider=class FocusWebviewProvider{constructor(e,t){this.container=e,this.host=t,this._disposable=s.Disposable.from(this.container.subscription.onDidChange(this.onSubscriptionChanged,this),this.container.git.onDidChangeRepositories(async()=>{this._etag!==this.container.git.etag&&(null==this._discovering||(this._etag=await this._discovering,this._etag!==this.container.git.etag))&&this.host.refresh(!0)}))}_pullRequests=[];_issues=[];_discovering;_disposable;_etag;_etagSubscription;_repositoryEventsDisposable;_repos;_enrichedItems;dispose(){null!=this.enrichmentExpirationTimeout&&(clearTimeout(this.enrichmentExpirationTimeout),this.enrichmentExpirationTimeout=void 0),this._disposable.dispose()}onMessageReceived(e){switch(!0){case S.is(e):this.onOpenBranch(e.params);break;case A.is(e):this.onSwitchBranch(e.params);break;case P.is(e):this.onOpenWorktree(e.params);break;case D.is(e):this.onSnoozePr(e.params);break;case W.is(e):this.onPinPr(e.params);break;case k.is(e):this.onSnoozeIssue(e.params);break;case E.is(e):this.onPinIssue(e.params)}}async onPinIssue({issue:e,pin:t}){let i=this._issues?.find(t=>t.issue.nodeId===e.nodeId);if(null!=i){if(t)await this.container.enrichments.unpinItem(t),this._enrichedItems=this._enrichedItems?.filter(e=>e.id!==t),i.enriched=i.enriched?.filter(e=>e.id!==t);else{let e={type:"issue",id:r.EntityIdentifierUtils.encode((0,I.D)(i.issue)),provider:(0,_.Am)(i.repoAndRemote.remote.provider),url:i.issue.url},t=await this.container.enrichments.pinItem(e);if(null==t)return;null==this._enrichedItems&&(this._enrichedItems=[]),this._enrichedItems.push(t),null==i.enriched&&(i.enriched=[]),i.enriched.push(t)}this.notifyDidChangeState()}}async onSnoozeIssue({issue:e,snooze:t,expiresAt:i}){let s=this._issues?.find(t=>t.issue.nodeId===e.nodeId);if(null!=s){if(t)await this.container.enrichments.unsnoozeItem(t),this._enrichedItems=this._enrichedItems?.filter(e=>e.id!==t),s.enriched=s.enriched?.filter(e=>e.id!==t);else{let e={type:"issue",id:r.EntityIdentifierUtils.encode((0,I.D)(s.issue)),provider:(0,_.Am)(s.repoAndRemote.remote.provider),url:s.issue.url};null!=i&&(e.expiresAt=i);let t=await this.container.enrichments.snoozeItem(e);if(null==t)return;null==this._enrichedItems&&(this._enrichedItems=[]),this._enrichedItems.push(t),null==s.enriched&&(s.enriched=[]),s.enriched.push(t)}this.notifyDidChangeState()}}async onPinPr({pullRequest:e,pin:t}){let i=this._pullRequests?.find(t=>t.pullRequest.nodeId===e.nodeId);if(null!=i){if(t)await this.container.enrichments.unpinItem(t),this._enrichedItems=this._enrichedItems?.filter(e=>e.id!==t),i.enriched=i.enriched?.filter(e=>e.id!==t);else{let e={type:"pr",id:r.EntityIdentifierUtils.encode((0,I.D)(i.pullRequest)),provider:(0,_.Am)(i.repoAndRemote.remote.provider),url:i.pullRequest.url},t=await this.container.enrichments.pinItem(e);if(null==t)return;null==this._enrichedItems&&(this._enrichedItems=[]),this._enrichedItems.push(t),null==i.enriched&&(i.enriched=[]),i.enriched.push(t)}this.notifyDidChangeState()}}async onSnoozePr({pullRequest:e,snooze:t,expiresAt:i}){let s=this._pullRequests?.find(t=>t.pullRequest.nodeId===e.nodeId);if(null!=s){if(t)await this.container.enrichments.unsnoozeItem(t),this._enrichedItems=this._enrichedItems?.filter(e=>e.id!==t),s.enriched=s.enriched?.filter(e=>e.id!==t);else{let e={type:"pr",id:r.EntityIdentifierUtils.encode((0,I.D)(s.pullRequest)),provider:(0,_.Am)(s.repoAndRemote.remote.provider),url:s.pullRequest.url};null!=i&&(e.expiresAt=i);let t=await this.container.enrichments.snoozeItem(e);if(null==t)return;null==this._enrichedItems&&(this._enrichedItems=[]),this._enrichedItems.push(t),null==s.enriched&&(s.enriched=[]),s.enriched.push(t)}this.notifyDidChangeState()}}findSearchedPullRequest(e){return this._pullRequests?.find(t=>t.pullRequest.id===e.id)}async getRemoteBranch(e){let t,i;let r=e.pullRequest,n=e.repoAndRemote,o=n.repo.uri,l=await n.repo.getCommonRepository();if(null==l){s.window.showWarningMessage(`Unable to find main repository(${o.toString()}) for PR #${r.id}`);return}let h=r.refs.base.owner,u=s.Uri.parse(r.refs.base.url),c=r.refs.head.branch,p=s.Uri.parse(r.refs.head.url),m=p.toString(),[,g,w]=(0,f.BX)(m);if([t]=await l.getRemotes({filter:e=>e.matches(g,w)}),null!=t)i=`${t.name}/${c}`,await this.container.git.fetch(l.path,{remote:t.name});else{let e=await s.window.showInformationMessage(`Unable to find a remote for '${m}'. Would you like to add a new remote?`,{modal:!0},{title:"Add Remote"},{title:"Cancel",isCloseAffordance:!0});if(e?.title!=="Yes")return;let n=r.refs.head.owner;if(await (0,a.WQ)(l,n,m,{confirm:!1,fetch:!0,reveal:!1}),[t]=await l.getRemotes({filter:e=>e.url===m}),null==t)return;i=`${t.name}/${c}`;let o=r.refs.base.repo,d=`pr/${u.toString()===p.toString()?c:i}`;this.container.git.setConfig(l.path,`branch.${d}.github-pr-owner-number`,`${h}#${o}#${r.id}`)}return{remote:t,reference:(0,d.kA)(i,l.path,{refType:"branch",name:i,remote:!0})}}async onOpenBranch({pullRequest:e}){let t=this.findSearchedPullRequest(e);if(null==t)return;let i=await this.getRemoteBranch(t);if(null==i){s.window.showErrorMessage(`Unable to find remote branch for '${t.pullRequest.refs?.head.owner}:${t.pullRequest.refs?.head.branch}'`);return}(0,g.RS)(n.T.ShowInCommitGraph,{ref:i.reference})}async onSwitchBranch({pullRequest:e}){let t=this.findSearchedPullRequest(e);if(null==t||t.isCurrentBranch)return;if(null!=t.branch)return l.S_(t.branch.repoPath,t.branch);let i=await this.getRemoteBranch(t);if(null==i){s.window.showErrorMessage(`Unable to find remote branch for '${t.pullRequest.refs?.head.owner}:${t.pullRequest.refs?.head.branch}'`);return}return l.S_(i.remote.repoPath,i.reference)}async onOpenWorktree({pullRequest:e}){let t=this.findSearchedPullRequest(e);if(t?.repoAndRemote==null)return;let i=s.Uri.parse(e.refs.base.url),r=t.repoAndRemote.repo.uri;return(0,g.RS)(n.T.OpenOrCreateWorktreeForGHPR,{base:{repositoryCloneUrl:{repositoryName:e.refs.base.repo,owner:e.refs.base.owner,url:i}},githubRepository:{rootUri:r},head:{ref:e.refs.head.branch,sha:e.refs.head.sha,repositoryCloneUrl:{repositoryName:e.refs.head.repo,owner:e.refs.head.owner,url:s.Uri.parse(e.refs.head.url)}},item:{number:parseInt(e.id,10)}})}onSubscriptionChanged(e){e.etag!==this._etagSubscription&&(this._etagSubscription=e.etag,this._access=void 0,this.notifyDidChangeState())}_access;async getAccess(e){return(e||null==this._access)&&(this._access=await this.container.git.access(o.k.Focus)),this._access}enrichmentExpirationTimeout;ensureEnrichmentExpirationCore(e){let t;if(null!=this.enrichmentExpirationTimeout&&(clearTimeout(this.enrichmentExpirationTimeout),this.enrichmentExpirationTimeout=void 0),null==e||0===e.length)return;let i=Date.now();for(let r of e){if(null==r.expiresAt)continue;let e=new Date(r.expiresAt).getTime();(null==t||e>i&&e<t)&&(t=e)}if(null==t)return;let r=t+9e5;for(let i of e){if(null==i.expiresAt)continue;let e=new Date(i.expiresAt).getTime();e>t&&e<r&&(t=e)}let s=t-i+6e4;this.enrichmentExpirationTimeout=setTimeout(()=>{this.notifyDidChangeState(!0)},s)}async getState(e,t){let i=this.host.baseWebviewState;this._etag=this.container.git.etag,this.container.git.isDiscoveringRepositories&&(this._discovering=this.container.git.isDiscoveringRepositories.then(e=>(this._discovering=void 0,e)),this._etag=await this._discovering);let r=await this.getAccess(e);if(!0!==r.allowed)return{...i,access:r};let s=(await this.getRichRepos(e)).filter(e=>e.isGitHub),n=s.filter(e=>e.isConnected&&e.isGitHub);if(!(n.length>0))return{...i,access:r,repos:s.map(e=>U(e))};let o=n.map(e=>U(e)),a=Promise.allSettled([this.getMyPullRequests(n,e),this.getMyIssues(n,e),this.getEnrichedItems(e)]),l=async()=>{let[e,t,s]=await a,n=[],l=v.Ro(e)?.map(e=>{let t=T(e,v.Ro(s));return null!=t&&n.push(...t),{pullRequest:c.pf(e.pullRequest),reasons:e.reasons,isCurrentBranch:e.isCurrentBranch??!1,isCurrentWorktree:e.isCurrentWorktree??!1,hasWorktree:e.hasWorktree??!1,hasLocalBranch:e.hasLocalBranch??!1,enriched:$(t),rank:e.rank}}),h=v.Ro(t)?.map(e=>{let t=T(e,v.Ro(s));return null!=t&&n.push(...t),{issue:u.Uf(e.issue),reasons:e.reasons,enriched:$(t),rank:e.rank}});return this.ensureEnrichmentExpirationCore(n),{...i,access:r,repos:o,pullRequests:l,issues:h}};return t?(queueMicrotask(async()=>{let e=await l();this.host.notify(z,{state:e})}),{...i,access:r,repos:o}):await l()}async includeBootstrap(){return this.getState(!0,!0)}async getRichRepos(e){if(e||null==this._repos){let e=[],t=[];for(let i of this.container.git.openRepositories){let r=await i.getBestRemoteWithIntegration({includeDisconnected:!0});if(null==r||e.findIndex(e=>e.remote===r)>-1)continue;t.push(i.onDidChange(this.onRepositoryChanged,this));let s=await this.container.integrations.getByRemote(r);e.push({repo:i,remote:r,isConnected:s?.maybeConnected??await s?.isConnected()??!1,isGitHub:"github"===r.provider.id})}this._repositoryEventsDisposable&&(this._repositoryEventsDisposable.dispose(),this._repositoryEventsDisposable=void 0),this._repositoryEventsDisposable=s.Disposable.from(...t),this._repos=e}return this._repos}onRepositoryChanged(e){e.changed(p.Z_.RemoteProviders,p.Ti.Any)&&this.notifyDidChangeState(!0)}async getMyPullRequests(e,t){let i=(0,y.dQ)();if(t||null==this._pullRequests){let t=[],r=new Map,s=new Map;for(let[n,o]of e.map(e=>[e,this.container.integrations.getMyPullRequestsForRemotes(e.remote)])){let e;try{e=await o}catch(e){R.Vy.error(e,i,`Failed to get prs for '${n.remote.url}'`)}if(e?.error!=null){R.Vy.error(e.error,i,`Failed to get prs for '${n.remote.url}'`);continue}if(e?.value!=null)for(let i of e.value){if(0===i.reasons.length)continue;let e={...i,repoAndRemote:n,isCurrentWorktree:!1,isCurrentBranch:!1,rank:function(e){let t=0;return e.reasons.includes("authored")?t+=1e3:e.reasons.includes("assigned")?t+=900:e.reasons.includes("review-requested")?t+=800:e.reasons.includes("mentioned")&&(t+=700),e.pullRequest.reviewDecision===c.dq.Approved?e.pullRequest.mergeableState===c.Q6.Mergeable?t+=100:e.pullRequest.mergeableState===c.Q6.Conflicting?t+=90:t+=80:e.pullRequest.reviewDecision===c.dq.ChangesRequested&&(t+=70),t}(i)},o=`${e.pullRequest.refs.head.owner}/${e.pullRequest.refs.head.branch}`,a=r.get(e.repoAndRemote.repo);null==a&&(a=new b.t(t=>e.repoAndRemote.repo.getBranches(null!=t?{paging:t}:void 0)),r.set(e.repoAndRemote.repo,a));let l=s.get(e.repoAndRemote.repo);null==l&&(l=await e.repoAndRemote.repo.getWorktrees(),s.set(e.repoAndRemote.repo,l));let u=await (0,m.vV)(e.repoAndRemote.repo,e.pullRequest.refs.head.branch,o,l,a);e.hasWorktree=null!=u,e.isCurrentWorktree=u?.opened===!0;let d=await (0,h.kY)(n.repo,o,a);d&&(e.branch=d,e.hasLocalBranch=!0,e.isCurrentBranch=d.current),t.push(e)}}this._pullRequests=t.sort((e,t)=>{let i=e.rank,r=t.rank;return i===r?e.pullRequest.updatedDate.getTime()-t.pullRequest.updatedDate.getTime():(r??0)-(i??0)})}return this._pullRequests}async getMyIssues(e,t){let i=(0,y.dQ)();if(t||null==this._pullRequests){let t=[];for(let[r,s]of e.map(e=>[e,this.container.integrations.getMyIssuesForRemotes(e.remote)])){let e;try{e=await s}catch(e){R.Vy.error(e,i,`Failed to get issues for '${r.remote.url}'`)}if(null!=e)for(let i of e)0!==i.reasons.length&&t.push({...i,repoAndRemote:r,rank:0})}this._issues=t.sort((e,t)=>t.issue.updatedDate.getTime()-e.issue.updatedDate.getTime())}return this._issues}async getEnrichedItems(e){if(e||null==this._enrichedItems){let e=await this.container.enrichments.get();this._enrichedItems=e}return this._enrichedItems}async notifyDidChangeState(e,t){this.host.notify(z,{state:await this.getState(e,t)})}};function T(e,t){let i;if(null==t||0===t.length){e.enriched=void 0;return}if(0!==(i=null!=e.pullRequest?t.filter(t=>t.entityUrl===e.pullRequest.url):t.filter(t=>t.entityUrl===e.issue.url)).length)return e.enriched=i,i}function $(e){if(null!=e&&0!==e.length)return e.map(e=>({id:e.id,type:e.type,expiresAt:e.expiresAt}))}function U(e){return{repo:e.repo.path,isGitHub:e.isGitHub,isConnected:e.isConnected}}x([(0,w.Yz)({args:!1})],FocusWebviewProvider.prototype,"onPinIssue",1),x([(0,w.Yz)({args:!1})],FocusWebviewProvider.prototype,"onSnoozeIssue",1),x([(0,w.Yz)({args:!1})],FocusWebviewProvider.prototype,"onPinPr",1),x([(0,w.Yz)({args:!1})],FocusWebviewProvider.prototype,"onSnoozePr",1),x([(0,w.Yz)({args:!1})],FocusWebviewProvider.prototype,"onOpenBranch",1),x([(0,w.Yz)({args:!1})],FocusWebviewProvider.prototype,"onSwitchBranch",1),x([(0,w.Yz)({args:!1})],FocusWebviewProvider.prototype,"onOpenWorktree",1),x([(0,w.Yz)()],FocusWebviewProvider.prototype,"getAccess",1),x([(0,w.Yz)()],FocusWebviewProvider.prototype,"getState",1),x([(0,w.Yz)()],FocusWebviewProvider.prototype,"getRichRepos",1),x([(0,w.Yz)({args:{0:!1}})],FocusWebviewProvider.prototype,"getMyPullRequests",1),x([(0,w.Yz)({args:{0:!1}})],FocusWebviewProvider.prototype,"getMyIssues",1),x([(0,w.Yz)()],FocusWebviewProvider.prototype,"getEnrichedItems",1)}};