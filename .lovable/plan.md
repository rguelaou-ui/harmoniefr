

## Suppression de l'etape "Surface estimee" du formulaire de devis

Le formulaire passera de 4 etapes a 3 etapes :
1. Type de projet
2. Delai souhaite
3. Coordonnees

### Modifications dans `src/components/QuoteForm.tsx`

- Supprimer le champ `surface` de l'etat `formData`
- Passer `totalSteps` de 4 a 3
- Supprimer le bloc JSX de l'etape 2 (surface estimee, lignes 199-224)
- Renumeroter les etapes : l'ancien step 3 (delai) devient step 2, l'ancien step 4 (coordonnees) devient step 3
- Mettre a jour la fonction `canProceed()` en consequence
- Supprimer `surface` du reset du formulaire dans `handleSubmit`

C'est une modification simple et localisee a un seul fichier.

