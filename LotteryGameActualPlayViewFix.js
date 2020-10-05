require('LotteryPlayModel, SGPageTitleView, LotteryActualPlayModel, LotteryGameHandler, SGPageTitleView, NSString, NSArray, NSMutableArray, NSNumber, MBProgressHUD, NSDictionary');

defineClass("LotteryGameActualPlayView", {
    pageTitleView_selectedIndex: function(pageTitleView, selectedIndex)
    {
        var pm = self.playModel();
        if(self.selectedMenu() == selectedIndex){return;}
        self.setSelectedMenu(selectedIndex);
        if(pm.lotteryPlayTypeList().count()==0)
        {

            self.setSelectedPlayModel(pm);
        }
        else{

            self.setSelectedPlayModel(pm.lotteryPlayTypeList().objectAtIndex(selectedIndex));
        }

        self.setSesionTextSource(self.gameHandler().sectionTextSourceForCode_subPlayModel(self.playModel().playTypeCode() ,self.selectedPlayModel()));
        self.setDataSource(self.gameHandler().dataSourceForCode_subPlayModel(self.playModel().playTypeCode(), self.selectedPlayModel()));
        self.collectionView().setHidden(false);
        self.collectionView().reloadData();
        self.collectionView().setContentOffset({x: 0, y: 0});

        if(self.delegate().respondsToSelector("actualPlayViewSelectNone"))
        {
            self.delegate().actualPlayViewSelectNone();
        }
    },
})
