import { Component, OnInit } from '@angular/core';
import { ClientServiceImpl } from '../../../core/services/impl/client.service.impl';
import { ProduitImplService } from '../../../core/services/impl/produit.impl.service';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CommandeServiceImpl } from '../../../core/services/impl/commande.service.impl';
import { CommandeCreate } from '../../../core/models/commande.model';
import { ClientListe } from '../../../core/models/client';
import { ProduitPanier } from '../../../core/models/produit';

@Component({
  selector: 'app-form.commande',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.commande.component.html',
  styleUrl: './form.commande.component.css'
})
export class FormCommandeComponent  implements OnInit{


  form=this.fb.group({
    articlesPanier:  this.fb.array([],[Validators.required, Validators.maxLength(5)]) ,
    total:new FormControl(0,[]),
    client: this.fb.group({
      id: new FormControl(),
      nomComplet: [],
      telephone:["",[Validators.pattern("^(77|78|76|70){1}[0-9]{7}$"),Validators.required]],
      addresse:  new FormControl(),
    }),
    article:this.fb.group({
      idArticle:[0],
      libelle:["",[Validators.required,Validators.minLength(4)]],
      montant:[0],
      quantite:[0,[Validators.min(1)]],
      quantiteStock:[0],
      prix:[0]
    },  { validator: this.validateQteCmde() }),
  });

  get articlesPanier() {
    return this.form.controls["articlesPanier"] as FormArray;
  }
  get total() {
  return this.form.controls["total"] as FormControl;
 }
 get article() {
  return this.form.controls["article"] as FormGroup;
 }

 get client() {
  return this.form.controls["client"] as FormGroup;
 }



  constructor(
    private fb:FormBuilder,
    private clientService:ClientServiceImpl,
    private commandeService:CommandeServiceImpl,
    private produitImplService:ProduitImplService){
       
  }


  ngOnInit(): void {
    //
  }

    onSearchClientByTel() {
      let tel:string=this.client.get("telephone")?.value
        if (tel.length==9) {
            this.clientService.findTel(tel).subscribe(data=>{
               this.client.patchValue(data.results)
           })
      } 
       
    }

    onSearchProduitByLibelle() {
       let libelle=this.article.get("libelle")?.value
       if (libelle.length>=3) {
         this.produitImplService.findLibelle(libelle).subscribe(data=>{
          if (data.statut==200) {
            this.article.patchValue(data.results)
          }
         })
      } 
      }

           addArticleToTable() {
                 let total:number= this.total.value
                 let prix:number=this.article.get("prix")?.value!
                 let quantite:number=this.article.get("quantite")?.value!
                 let montant:number=prix*quantite
                 this.article.get('montant')?.patchValue(montant)
                 this.total?.setValue(total+montant)
             
               let index=  this.articlesPanier.getRawValue().findIndex(value=>value.idArticle==this.article.get("idArticle")?.value)
               if (index==-1) {
                    const formG = this.fb.group({
                    idArticle:[this.article.get("idArticle")?.value],
                    libelle:[this.article.get("libelle")?.value],
                    montant:[this.article.get("montant")?.value],
                    quantite:[this.article.get("quantite")?.value],
                    quantiteStock:[this.article.get("quantiteStock")?.value],
                    prix:[this.article.get("prix")?.value]
               });
                  this.articlesPanier.push(formG);
               } else {
                  // this.articlesPanier.at(index).get()
               }
               
                 this.article.reset()
         
            }
        onSubmit() {
        
          const { article: removedKey, ...panier } = this.form.value;
          const commandeCreate:CommandeCreate=panier
          this.commandeService.create(commandeCreate).subscribe(data=>{ 
               console.log(data);
               this.form.reset();
          })
        }

        validateQteCmde(): ValidatorFn {
 
          return (control: AbstractControl): ValidationErrors | null => {
          
            const quantiteStockValue = control.get('quantiteStock')!.value ;
            const quantiteValue   = control.get('quantite')!.value;
              
                 if (Number.isNaN(Number.parseInt(quantiteValue))||  Number.parseInt(quantiteValue)<=0 || Number.parseInt(quantiteValue) >=quantiteStockValue)
                 { 
                     return { 'qteNonDisponible': true } 
                 }
             
              return null
       
          }
        }
}
