function constructionCrew(objWorker){

    if (objWorker.dizziness) {
        objWorker.levelOfHydrated += objWorker.weight * objWorker.experience * 0.1;
        objWorker.dizziness = false
    }

    return objWorker

}
constructionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true })
constructionCrew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true })
constructionCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false })