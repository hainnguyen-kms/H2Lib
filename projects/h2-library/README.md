
# H2Lib  
  
This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.  
  
# Getting Started  
Preinstallation:  
  
``  
yarn add jquery bootstrap @fortawesome  
``  
  
Then update your angular.json with something like:  
  
```  
"styles": [  
 "node_modules/@fortawesome/fontawesome-free/css/all.css",
 "node_modules/bootstrap/dist/css/bootstrap.css"],  
"scripts": [  
 "node_modules/jquery/dist/jquery.min.js", 
 "node_modules/bootstrap/dist/js/bootstrap.bundle.js"],  
```  
  
```sh  
$ npm install h2-library --save 
$ yarn add h2-library  
```  
  

    import { H2LibraryModule } from 'h2-library';  
      
    @NgModule({  
    ...,  
    imports: [..., H2LibraryModule]  
    })  

  
# Components  
## Interface
- User {  
 userName: string;
  profileImage: string;
  }  
 
- MenuItem {  
  title: string; link: string;
   icon: string;
  subMenus: MenuItem[]; 
  }
# h2-library-header 
###  Example  

    <h2-library-header [settings]="headerSettings" (logoutEvent)="logout()"></h2-library-header>  

### Properties of settings  
  
| Name | Type | Default |  Description |  
| --- | --- | --- | --- |  
| logoUrl | string | empty | Url to source of logo image  
| pageTitle | string | empty | Title of app  
| menus | MenuItem [] | null | List of link item   
| user | User | null | Meta data of userFact  
  
 ### Event
- logoutEvent: Callback when click on Logout button  
### Customization  
  
We provide 2 directives: ***appHeaderItem*** and  ***appHeaderAvatar*** in case of you want to customize MenuItem and AvatarDropdown menu
#### Example:

	<h2-library-header [settings]="headerSettings" (logoutEvent)="logout()">  
		// appHeaderItem directive gives you access to menuItem of settings
		 <ng-template appHeaderItem let-sidebarItem>  
		     <ul class="sidebar-list custom-class">  
			     <li style="color: white">  
			      {{sidebarItem.title}}  {{sidebarItem.link}}  
			      </li>  
		     </ul>
	     </ng-template>
		// appHeaderAvatar directive gives you access to user object of settings
	    <ng-template appHeaderAvatar let-avatarItem>  
	      {{avatarItem.userName}}  
	    </ng-template>
	</h2-library-header>
   

 # h2-library-sidebar  
  
### Example:

    <h2-library-sidebar [config]="sidebarConfig"></h2-library-sidebar>  

### Properties of config:
  
| Name | Type | Default |  Description |  
| --- | --- | --- | --- |  
| menus | MenuItem [] | null | List of link item   

### Customization:
We provide directive: ***appSidebarMenuItem*** in case of you want to customize SidebarMenuItem
#### Example:
	<h2-library-sidebar [config]="sidebarConfig">
		<ng-template appSidebarMenuItem let-sidebarItem>  
			<p style="color: white">{{sidebarItem.title}}</p>  
		</ng-template>
	</h2-library-sidebar>
     
  
# h2-library-footer  
  
### Example  
  

    <h2-library-footer title="Footer"></h2-library-footer>  

  
### Properties  
  
| Name | Type | Default |  Description |  
| --- | --- | --- | --- |  
| title | string | empty | Footer title  
  
# h2-library-login  
  
### Example  
  
  
	 <h2-library-login (loginEvent)="login($event)" [meta]="loginMeta"></h2-library-login>``  
### Properties of meta :
  
| Name | Type | Default |  Description |  
| --- | --- | --- | --- |  
| registerUrl | string | empty | Link to register page  
| forgotUrl | string | empty | Link to forgot password page  
  
###  Event :
 **loginEvent**: Callback when submit form   
 Returned value
  {  
 username: string,
 password: string, 
 isRemember: boolean  
 }
