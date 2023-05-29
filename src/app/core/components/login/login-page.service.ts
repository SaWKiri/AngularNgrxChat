import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../services/base-http.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setContacts } from '../../state/app-chats';
import { AppState } from '../../state/reducer';


export const ChatHistory = [
  {
    contact: {
      name: 'Dvir',
      image:
        'data:image/jpeg;base64,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',
    },
    lastMessageDate: new Date(),
    messagePreview: 'hi, how are you?',
  },
  {
    contact: {
      name: 'Dvir',
      image:
        'data:image/jpeg;base64,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',
    },
    lastMessageDate: new Date(),
    messagePreview: 'hi, how are you?',
  },
  {
    contact: {
      name: 'Dvir',
      image:
        'data:image/jpeg;base64,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',
    },
    lastMessageDate: new Date(),
    messagePreview: 'hi, how are you?',
  },
  {
    contact: {
      name: 'Dvir',
      image:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIUEhgSEhIYGBgYGBgYEhgSGRgYGBgSGBgZGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHjQrJSs2NDU0NDU0NDQ0NDQ0NDQ0ND00MTQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDY0NDQ0PTQ0NDQ0Mf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEDBAUGB//EADoQAAEDAgQDBwMBBwQDAQAAAAEAAhEDIQQFEjFBUWEGInGBkaHwEzKx0QcjQnLB4fEUM1JiQ2OSFf/EABoBAAIDAQEAAAAAAAAAAAAAAAECAAMFBAb/xAAsEQACAgEEAQIFAwUAAAAAAAAAAQIRAwQSITFRBWETIkFxkTKx0SMzQoGh/9oADAMBAAIRAxEAPwCJwukAidulC3zIFCcBPCcBEAwCeE8J4UAMAnhPCIBEAMJ4RQlChAQE8J0oUANCQCKEbntY0yCSQQY4A2B8J3PVUZ88cUbffguwYZZZUuvIVPDOcSANhKmZRaHsaWmHt1F5cIaBqLtQ5AMPrCgoZgym0tc+TpJsBtttw4+nRZ+a4x9Sm5jdNwGvvEAaXEeZJPmsPPr8uSVRdL2NfFpMcFbVv3N+hTpkukDR/A6bOGlpBF7/AHNVGs1oLuGl0EHhfSL8JNvGy5yjmFRtNrBqGhga0XMOIMmfGfKFdyvMHS41AHa2BgkzpaCBf/6EdWqmGqzQld2WywYpKqo28PRa8XaRYnUOnMH+ygqUHNJBExxFxHOVnvxzmB+kyHEt2mRYG4tEQJ6noVaw1RzXNIMnS2Ts0CBcjc2aJkcYXVD1GUZW1wc89FGS44YUJQrOJphvIavsEi/MRMmOagha+HPHNG4mZlwyxumBCSKE0K4qBSKKEoUIRwlCOE0KEAhCQpCEJCAQCEJCkIQkIBAhNCIhMQoQjKBwUpCjcEoUQuS0HkieEbHmEo6NIYN8pPwrmrYhIgcVPiMXajEdTI3CQCs4yoHGAoRTPJXRfHIj7AhPCeE4TCCShIBPChBk8IgEoUIDCeEUJQoQhr4hrI1EXmAeJhZuOzF7iYsdo3gXkO+flVM4xYe5rWgObcAgtcJ4naxkc/ypcDhi6D4bx/j2Xnddm3z46Ru6PFsh7lfC4V7iImYI4yAdxPHfdb2XZS6Rq8/AD56rQweFaIgelrrUYyFnSk2dyjRjDJ2g2FrGPKYVzDdn23dpAsZHDw9lq0WBW6fJLYaOdqdn4bPG7ja0krLOH0EtgkzxBAncEkXNzzC7xzrb9FnV6AJ2CikSjjn3IFUAtbsNIkm8NDibXO+39Z6FUaQXgsmS0PLTaY+4RabSQtfMMGYlrjI4Wv6rj8xp1Gv1VHjq5z7xyFoF116fPLHJNM5s+KM40zeITELDweexDXtBYOLC0vY0Wl7GmdH/AGAAHEBbrSCAQQQRII2IOxC9Fgzxyxtfgws2GWOVMGEiEcJiFeVEZCeEUJoQICQmhFCaFAgEISFIQmIQCRkICFKQhIQCRkKNwUpCTGgmCgwoGizjCjdRupnNcw2uEz2OJlVNjo6RqrYwOIgK03ZFCCdMj5KGFwo+5ylrVWwQArBDUpYOSa7dsWq4MYhIBT4ktJ7qiAXSnaKWKE4CUIoUINCeEgE8KEGhZ+dYoU6RJeGk2BsfGx3WiuJ7UYlz62kSGM7gNoLv4jPCDbyXPqsmzG67fBfpob5r2Cy+iXmbaegDR0sNl0+FaGiFmZLQ002kjcefmtSk2/ivN5HZ6CCo1cNUV9hus7C0ytWnRMbLnZaT0lMEFNisMaEGQUIdCtNiEz2TsgQqPpi9lxud4UNcTp62/Rdq8LCzmmS0wJ5J49gl0ef40TDmMlzZPcGp7TJGoN3bwAi/VavZ6s+HU6ggi7LASOIgAQeMeO0QKOPw+okuhkfxN1ggnY6mg9E2V4t2r6VXFfUMaqcFxcwNkmXObItwPIyOfdp8zxyUkcWfGpxaZ1EJQna8OEgEQSCHCCCDBslC9DCanFSXTMOUXCTiwYTQjhNCYUAhDCkIQkKDAwhIRwhIUICQhIUkISEoxE4IHKVwUZUIOx5iN1Nh6phR0ouomnfxVTVjpnUAJnmBKNU8e8xASxVuiN0ik+oSd00lCAiC6kkilsUJ0oThEUSdKE8KEEAklCeFAEOJrhjC+CSNgIkuNgLrzuuz9+5zqbmvLiXGp92om9oELu87wr6lFzKb2tdYjV/FG4HXj5Lha9Gswg1Q6RAl5B7vDvDcW5lY+vyXPbfRq6OFQ3V2dZgH90DpZaeFYXGVx7e0FCmBqfqMCzBqMxfoPVWqnafEgfusO2mODq7iXEfytghZjhJmnGaO+o2V+lVMLyarnWYOIOsD+SmYPW5n/Csv7W4ygw6mtqcA8FwaCebS0EJfgt+AvKj1gEqLEYqnTbqe6F5Zl2e53igXUSA3gQ1jQI/4l1/yqmXU8XiMQ7D4ys8tptdUqNc4nVcANJ4glwMbQLQisKXbF+I30jtcw/aHTbIw1B1WLay4Mp6uWs/d5Krlna3M8TULKX+jZ3S6HmpsIBlwBB3Cq4mjQZpNQF8CGNJ7rRwAGwHQBO3NMMQGsAYT9pEtHKztMbeyMdt9WgSUq7pl/O87zfDM1vbhKrROo4dxcWgbktOl0DmAYXP0O29WvUio5rAWODAxvd+qC1zSSZMENezf+OeEjVwWUhz9bXaSCNhuP6hY2QdnXnE4sUgP3TtDCbWeXGBy7oA80+6CtpdC7J2lZZxNZr6bnzDukwdU3naPE8t1RyzBtFQEFxcJI0tvAAvqJho33nyVXEvq4eqWVKTtEw8RIufubC38qy+o9jqbXkNeW/T1OI7kEv7vCOHWyaTi1ujwvAsVK9r5Zr4AEtJkFpJLCBEAkmDG/j1VkhSMwRoU2UzuAZIMg33FkC29I7wox9UqytAkJkRSXUc4CZGhIQIAUyMoVAglMQihMUBiMhROCnISLOaVsKI3WbsoqRsrWIENiUFDDSJScDo6NBWp6gnqPDRJRUnSJSK1yT2MeozSYTBWccO8q8Lqi7VlEuGMnCcJIiiTwkAnChBJJ0oUAUM5/wBqeRB8uMLge0Vd1Vn+4XBrmw2TEHUNo32XpWJpa2lvNeY9o6D2OdTLY7zbjY3sfdZWsxfPvNTSZE4bRuyFBrnvquAlmkM5BztV45933XRUXNYfqVLnr+AsPs40tLmubH1CHMP/AHph8t82vcfFq6HEZd9TSJMQNUfiyzZ9mjj6ArZ5qGkMgWgy1sk7AOfYk+Cz8QzWyHAgvbIkTLTzhdHTy1li5swIAGoWG03VbMiyjTfUMANaYAt0AHnA80qa6Q1S5b6C/ZrVe9hYYlri1vDutAV/F5a3D5n9U2ZiaZZfb67XM7vm0SPAqL9meELGB7jBNyDzd3vwQux7R5PTxNAscS2Yc1zfubUbdrmngQf680jmlNodQexeTCqYBrX6g0OsRB4A8uscVSwWRgVGvJLouAQAJDS0Te/oFJh84dQApY9jm1G2FSmxzmVWjZ40gwY3Fr8FO3tJhJ7r3vMWayjVLj5BqiclwgOMXyy7lOUtZq02BkkE90fooex7ZpV8SNsRiKj2H/0tIY0+cOPmoXPxOLYaIpvw9B9qrqhH1n0z9zGME6ARbU4zBNl0mFwjWsaxjQ1jWhrWjYNaIAHokbpUMo27Oez3Lg8BxG0z/KqOSMDXuAFyNIftFokdbLscXQGgiFymD7lS7JaXabExItIPkUFIdRqVlvDYdzA6mXOc2C6mXnUWlu4lMtt+EaQHMJIgg+YssWFuemTuDj4f7mV6tFblLygUxCJMtMyQSmIRFMoQApiEZCGECAFMQjKEhAYEoxUBsUBTBt0skMmDWbcBaNJkCFQxBggrRoPloKpn0ixE1d7HDdPhcQIhZkpwVf8ADVUU7uTUrMY68rOcL2Tak4TxjtFlKxBOEk4TCCCdIBPChBJ06ShBLgO0L9dZ4INjE9Bsu/C47P8AD/vncNUESs/1C1Bfc0fT0nJp90Nk2DbUpgOcW31Nc2zmvBs4HmPfbZW6eLfQhlem55H/AJKDQ5rhNnFoOppjcRE7JskAFPTyMe62P9BTf94nzWLKVGvCKaMuv2hZsyhWceEsDBPUuI/Co/8A5+IxDg/EgMY06m0m3uOLid/YLraGFo07U6bQeLo73rwTYmlDT1VSn4RY4p9sp5Him036DbUZHoLey6PM88o0GNfUdpYXBpMOdc89IMDqbLz6rgnPqsc4iWSGOaTaenNdZhsU1lMsJ1ui5dt4eyLrsZP6G4PpvGzXsIkAw63RWcNQpj7WNgbCBb9Fh5TjGt7uiJ5bDpHDwWw2x1DzCqYb8F0sbwATtAiyTDKMoIllPGOhhXPMAeHtIvw2s6bAHrZa2cv/AHZv8+Qsfs5UJrbbDY/38vdMkC+Tay7D1Ggh4gHToEzI3nosd4ufFdW6oNJLuAXJuK2PSk/mf2Mv1WVqP+wUydJbJjgwmRJkAgkJinKRUIAQhIRlCUCAQicC24SUuoDfZJIeJXewvIVunQgRKVOq0KX6zeapk2WooAogVGCiBXWc5ICjBUQKNpRAwwiQgogoKOE4TBEoAQTpJioQRKyM9otdocY4gk8on9VqkqlmVPWyORn8rm1cd2FnVo5bcyOcyqsGvLIPCLzxv+Cuqw1xuuMrP01oA5SdrcV02GrwN7ceK85NG/F0bFAqlmWK17GBePAbkInVZaQDuFSxNB41aGgkRpH4/KrSHbvhEOGgSSbTaPm1lfoMol2rU8/9DAE85G6ysNhKrj3wI5NJ/K2cPl1MQCLxxJNvM9U1IsiopEYfSY+Q+PAgwVpUcc0tgPDrjY7j5CsYfL6JAFh0gJ6uUUGNllNoPMC6SSRJbfoaGAqy3fwUjsUBYnmsehV0NImf7bql/rpcTMxIj547pSuybNMVLSRfcEfn/CzMtqlj5bv19APC/uEsXXGl3Mbz1MC/h+FBltYF8HcNAG1rDb2V2KG5pCznXJv4jHveINhxjiqiYFJenw4Y4o1FHnc2WWWdtiSTJpVpUPKZKU0qEHTFKUkAjFCUZQlAgBQvdaEZUbkAoico5Uj0CVjonhOkkriscKRqAIgoBkjSjCjCNqIoYCJME6ABIHFEVG4qBQLion7QicVG4pZJNUyyDcXaOUzyg5j2vteYieHMeakweYmJGwEGBPLdW+0VPUwEC42P5n2XM0q022/E8/ysLV4VGVLo2tPlco2+zq8BjYdBM8Oi1W1xMTPPxhcQzFjgR+Ollp4LMnEtkDqdpMQJ+cFwuJ0qR1H1gBPOPnuFUxOZAVGtF95HMkGFXGJcQNwYt4T89FC2k0XceP43j29UrG7OjwWKMek7SDsVovxrQw3vy4rnqdUuNhA5ndF9exaXGY333mPwUlBtB18Q2XGdoNufL8LMfiCHuDRvF+hufYoMRXFyDbiRe3Tnbny9MjEYkkmAYgDryA9vdPGIjkXKmP4TJJvPLZW8nlzy8bE2E8d3e5Flg02Pe/TF9jwgX4cuPouxyrA6KfMgwRxaeIK7tLCLmkyjM5KDcVZbCSdMvQGCxkydMoQSaU5TKBFKdClKhAkxSlJAgJUblKVE5AKInKNSuUaVjInCcJgnVog4RBME4UFCCkaowjaiAlCdM1OVAAOKicVI5ROKAUA4oE5TIDkeIoh7S07EQV5/muCfRfpP2uMg72H+V6BiKzWNLnHb3XGYrEHEVHB/FvcH/GOXqs/WuDj7mlo8eSrrgyab4Nt+au4XEaTJ/W/MfOKzcTTcwkOnoQgFQjfxE/LrKaO6zshWhgI7znMtyJE/1Hoiq4iOIAH+InncLnaOYOAgE9NiAePhcK7hMWH0ywtmYgnmDc2+QFVKIyZuNxsCAbECTxAt732UoriLHvHTfk3efJc9TxDbgmbASBtvx9VO+uxrABcxAcDaL3I8/wAIbQ2WamIEWMzyGxvbxhZz37AncwOPEI6BLyGsGrYTt0grrck7M94PqGQLhvDpfjt7o2okqwuzGQaQ2pUuSZjiPPruqGBzgsx2JpuNvrPgH+Yr0CjRDRDfLy5LxztrTfhsxe8ghtQ/UYeBa7f0dKmOVyL8UlB89HpLmBw1M25KuVm9nM11NAJ3W9Xog3Hz+619Lq/8J/k49f6apf1MK+6/gppkTmkWIQrTTswWmnTGKZOUxUAMUwTlMoEeU8oU4QIIqNykKjcgQjeo0bkCVjEycJk4VogQTpgiCIo4RsQBG1QhK1JyQSIQbS7GUZSdJWROUTlM4KJ0KiepxRXL/B2YfT8+R0o17vgiTlO53LZRkrPy66UuI8L/AKbWm9Jhj+bI7fj6GfnLAaZuZBt4rlq1QMcx54PaD/K4wfY+y7HEtBaRzXIUAHZhQpGCNYc4HYwCQPYrjvcmdeprHA08Zloe0wPDw5rnMRgXMvHlyXftwhpk03302BPFv8LvMKrj8v1Xa2Z3XMpNOjkcbVnnjS4Ecgbz/X3VuhiHNiO6ByJvz/C262TGft43Vd2VkEW48k+9CbWUA8OuedgtHBZc+pDWg3uY9lqZP2d1ul+0wPBd5l2XMYAAI5ePz8JHLwFR8mZkPZ9lMN1XcL7Du9Oq6mlT6J2UrbKyxkJGx0gNK5f9oWQNxOFa4Dv0z3CN+9w63j1XXMYrVPChwJcLDaf+Q2Pklje5UPJxUXZ4BktWrh8S7C1Y1NMWM3AmJ42Mr0vDVNVMH58+ePmeKqfXzeo9l2B7jI20MGgHwOkeq9DwDv3Y+X24/PFdtUzo0knLHz9C6HBwh3+FXqUiLi45/qjYeas07fPnz36sWolj65Xgr1Whx51fT8maUitF+Ha/oeBG09QqlTCVG7t9LrRxamE13T8M89qPT82F9WvKK5TIiEJXQcdDJ0ydQg6jcjQuSgRE5AjcgSsclThJJXIQIIkklABtYTsFI1qSSztZnnBtRN703RYckVOSDDuXzzQVH890kllucn2zdWKEF8qK8lCW+iSSDLBaVE8cPVMkgiMT6MiFwXaNrsPjm1GmHDRUYeGpp4+bUklZE4db+g9TyivRzDDtqUyA9oAc0m7HbljukzB290wy4t3HH0PI8kklzZ4pPg48MnRO3LWu3EpDJmHn6ApJKlFjLmGy5rVospgJkkQFpjUYppJKELGHpajA2G55dPFcr+0rtU3CYc4ai6K9RsDTvTpndx5OIkD1vCdJdGKKKMkmeYdkKcNe+3fcB10tFvcn0Xc0GjTbzHz548Ekrfqamm/tonY3j8+fOqstPz58/CZJRnSOT85qxTqyIKZJBgFUptd9zQfz6qq/L28HEeN0kkceoyQ6ZVk0mHL+qKKlfCPZfccx+irhJJbGnySnF7jy+vwQw5NsPA6BySS6ThAco0kkrGP/2Q==',
    },
    lastMessageDate: new Date(),
    messagePreview: 'hi, how are you?',
  },
  {
    contact: {
      name: 'Dvir',
      image:
        'data:image/jpeg;base64,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',
    },
    lastMessageDate: new Date(),
    messagePreview: 'hi, how are you?',
  },
];



@Injectable({
  providedIn: 'root'
})
export class LoginPageService {

  constructor(private readonly state: Store<AppState>, private readonly router: Router) { }

  login(username: string, password: string) {
    this.state.dispatch(setContacts({contactsList: ChatHistory}))
    this.router.navigateByUrl('page/chats');
  }
}
