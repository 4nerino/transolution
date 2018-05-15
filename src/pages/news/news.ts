import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { DetailsPage } from '../details/details';
/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  posts:any;
  items=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public apiService: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
    this.getData()
  }

  getData(){
    this.apiService.getRemoteData('http://www.online-transolution.net/wp-json/wp/v2/posts').subscribe(responce =>{
      this.posts = responce;
      for(let item of responce)  {
        this.items[item.id]={
          main:item ,
          comments:[],
          foto:{}
        };
         this.getcomments(item.id);
         if(item.featured_media > 0){this.getfoto(item.id,item.featured_media);}

      };
    });
  }

  getcomments(postId){
    this.apiService.getRemoteData('http://online-transolution.net/wp-json/wp/v2/comments?post='+postId).subscribe  (responce=>{ this.items[postId].comments = responce;
    });
    console.log('comments'+postId);
    console.log(this.items) ;
  }

  getfoto(postId,fotoid){
    this.apiService.getRemoteData('http://online-transolution.net/wp-json/wp/v2/media/'+fotoid).subscribe  (responce=>{ this.items[postId].foto= responce;});
    console.log('foto'+postId);
    console.log(this.items);
  }
  viewItem(item){
     this.navCtrl.push(DetailsPage,{item:item});
  }
}
