
export const validarPresupuesto = budget => {
    let totalBudget = parseInt(budget, 10) || 0;

    if(totalBudget > 0){
        return totalBudget;
    } else {
        return false;
    }
};

// para cambiar el color del restante del presupuesto cada que baje 25%
export const revisarPresupuesto = (budget, remaining) => {
    let claseName;
    if(budget / 4 > remaining){
        claseName = 'alert alert-danger';
    } else if(budget / 1.5 > remaining){
        claseName = 'alert alert-warning';
    } else {
        claseName = 'alert alert-success';
    }
    return claseName;
}